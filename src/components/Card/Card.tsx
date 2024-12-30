import { URL_IMAGE_PROFILE } from '../../App'
import './Card.css'
import { CastMember } from '../../interface/CastMember'
export function Card({castMember}:{castMember:CastMember}) {    
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
                        {castMember.character &&(<p className='papel'><span>{castMember.character}</span></p>)}
                    </div>            
                </div>
            </div>
        </>
    )
}