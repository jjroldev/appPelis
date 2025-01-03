import { URL_IMAGE_PROFILE } from "../../App";
import "./Card.css";
import { CastMember } from "../../interface/CastMember";
import { Skeleton } from "@mui/material";
import { useVisibility } from "../../hooks/useVisibility";
import { useRef } from "react";
import React from "react";

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
  const cardRefCredit = useRef<HTMLDivElement>(null);
  const isVisibleCredit = useVisibility(cardRefCredit);

  return (
    <div ref={cardRefCredit} className="contenedor-posterCM">
      <div className="cardContainerImageCM posterCM">
        {!isVisibleCredit ? (
          <Skeleton
            width="100%"
            height="100%"
            variant="rectangular"
            sx={{ bgcolor: "grey.900" }}
          />
        ) : (
          renderCardContent(castMember, isCrew)
        )}
      </div>
    </div>
  );
});
