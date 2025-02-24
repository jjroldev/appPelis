import './SectionActor.css'
import { useQuery } from 'react-query'
import { Actor } from '../../interface/Actor'
import { fetchData } from '../../utils/fetchData'
import { getURLDetailsOfActor, getURLSearchActors, URL_IMAGE_PROFILE_HD } from '../../utils/endPoints'
import { useLanguage } from '../../context/LanguageContext'
import { motion } from 'framer-motion'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { Skeleton } from '@mui/material'
import CarouselItemsActor from '../CarouselItemsActor/CarouselItemsActor'
export default function SectionActor({ actorId }: { actorId: string | undefined }) {
    const { language } = useLanguage()
    const { data: actorDetails, isLoading } = useQuery<Actor>(`actor-${actorId}`,
        () => fetchData(getURLDetailsOfActor(actorId, language)), {
        refetchOnWindowFocus: false
    })

    const { data: dataSearchActors, isLoading: isLoading1 } = useQuery(`dataActors-search-${actorId}`,
        () => fetchData(getURLSearchActors(actorDetails?.name, language)), {
        enabled: !isLoading, refetchOnWindowFocus: false
    }
    )

    const known_for = dataSearchActors?.results?.find((data: Actor) => data.name === actorDetails?.name).known_for

    const width = useWindowWidth()

    if (isLoading || isLoading1) {
        return (
            <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                width={"100%"}
                height={300}
            />
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="containerDetailsActor flex w-full bg-red text-white">
            <div className="containerPerfilIMG flex flex-col relative">
                <motion.img
                    className='object-contain object-center img-actor'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    src={URL_IMAGE_PROFILE_HD + actorDetails?.profile_path}
                >
                </motion.img>
                <div className="aboslute bottom-0">
                    <div className="detailActor w-full">
                        <h3>Birthday</h3>
                        <p>{actorDetails?.birthday}</p>
                    </div>

                    <div className="detailActor w-full">
                        <h3>Place of birth</h3>
                        <p>{actorDetails?.place_of_birth}</p>
                    </div>
                    <div className="detailActor w-full">
                        <h3>Sex</h3>
                        <p>{actorDetails?.gender == 2 ? "Masculine" : "Femenine"}</p>
                    </div>
                </div>
            </div>
            <div className="containerDetailsActorIMG w-full">
                <h2 className='actor-name'>{actorDetails?.name}</h2>
                {actorDetails?.biography && (
                    <div className="detailActor w-full relative">
                        <h3>Biography</h3>
                        <p className='biography'>{width >= 950 ?
                            actorDetails?.biography.split('.').slice(0, 7) :
                            actorDetails?.biography.split('.').slice(0, 3)} .</p>
                    </div>
                )
                }
                <CarouselItemsActor items={known_for}
                    title='Known for'
                    isLarge={false}
                />
            </div>
        </motion.div>
    )
}