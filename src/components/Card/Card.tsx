import { URL_IMAGE_PROFILE } from "../../App";
import "./Card.css";
import { CastMember } from "../../interface/CastMember";
import { Skeleton } from "@mui/material";
import { useVisibility } from "../../hooks/useVisibility";
import { useRef } from "react";
export function Card({ castMember, isCrew }: { castMember: CastMember; isCrew?: boolean }) {
  const cardRefCredit = useRef<HTMLDivElement>(null);

  const isVisibleCredit = useVisibility(cardRefCredit)

  return (
    <div ref={cardRefCredit} className="contenedor-posterCM">
      {!isVisibleCredit ? (
        <div className="cardContainerImageCM posterCM">
          <Skeleton width={"100%"} height={"100%"} variant="rectangular" sx={{ bgcolor: "grey.900" }}/>
        </div>
      ) : (
        <div className="cardContainerImageCM posterCM">
          <img
            src={`${URL_IMAGE_PROFILE}${castMember.profile_path}`}
            alt={castMember.name}
            className="main-imageCM"
          />
          <div className="detailsCM flex flex-col">
            <p className="nombre-caster">{castMember.name}</p>
            {!isCrew ? (
              <p className="papel">
                <span>{castMember.character}</span>
              </p>
            ) : (
              <p className="papel">
                <span>{castMember.job}</span>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
