import "./Card.css";
import React from "react";
import { CastMember } from "../../interface/Movie";
import { URL_IMAGE_PROFILE } from "../../utils/endPoints";
import { useNavigate } from "react-router";
function renderCardContent(castMember: CastMember, isCrew?: boolean) {
  return (
    <>
      <img
        src={`${URL_IMAGE_PROFILE}${castMember.profile_path}`}
        alt={castMember.name}
        className="main-imageCM"
      />
      <div className="detailsCM flex flex-col">
        <p className="nombre-caster">{castMember.name}</p>
        <p className="papel">
          <span>{isCrew ? castMember.job : castMember.character}</span>
        </p>
      </div>
    </>
  );
}

export const Card = React.memo(({ castMember, isCrew }: { castMember: CastMember; isCrew?: boolean }) => {
  
  const navigate = useNavigate()
  return (
    <div className="contenedor-posterCM" onClick={
      ()=>navigate(`/actor/${castMember.id}`)
    }>
      <div className="cardContainerImageCM posterCM">
          {renderCardContent(castMember, isCrew)}
      </div>
    </div>
  );
});