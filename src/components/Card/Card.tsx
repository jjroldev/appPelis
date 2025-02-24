import "./Card.css";
import React from "react";
import { CastMember } from "../../interface/Movie";
import { URL_IMAGE_PROFILE } from "../../utils/endPoints";
import { useNavigate } from "react-router";
import { useRef, useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { Actor } from "../../interface/Actor";
function renderCardContent(castMember: CastMember | Actor, isCrew?: boolean) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <motion.img
        src={`${URL_IMAGE_PROFILE}${castMember.profile_path}`}
        alt={castMember.name}
        className="main-imageCM bg-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: .3, ease: "easeOut" }}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="detailsCM flex flex-col">
        <p className="nombre-caster">{castMember.name}</p>
        {
          'credit_id' in castMember && (
            <p className="papel">
              <span>{isCrew ? castMember.job : castMember.character}</span>
            </p>
          )
        }
      </div>
    </>
  );
}

export const Card = React.memo(({ castMember, isCrew }: { castMember: CastMember; isCrew?: boolean }) => {

  const navigate = useNavigate()
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);
  return (
    <motion.div
      ref={divRef} className="contenedor-posterCM"
      onClick={
        () => navigate(`/actor/${castMember.id}`)
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="cardContainerImageCM posterCM">
        {renderCardContent(castMember, isCrew)}
      </div>
    </motion.div>
  )
});