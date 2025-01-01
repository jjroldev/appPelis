import { URL_IMAGE_PROFILE } from '../../App'
import './Card.css'
import { CastMember } from '../../interface/CastMember'
export function Card({ castMember, isCrew }: { castMember: CastMember, isCrew?: boolean }) {
    return (
        <>
            <div className={`contenedor-posterCM`}>
                <div className={`cardContainerImageCM posterCM"}`}>
                    <img
                        src={`${URL_IMAGE_PROFILE}${castMember.profile_path}`}
                        alt={castMember.name}
                        className="main-imageCM"
                    />
                    <div className='detailsCM flex flex-col'>
                        <p>{castMember.name}</p>
                        {
                            !isCrew ? (
                                <p className='papel'><span>{castMember.character}</span></p>
                            ) : (
                                <p className='papel'><span>{castMember.job}</span></p>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}