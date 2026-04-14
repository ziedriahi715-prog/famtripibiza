import React from "react";

interface BannerProps {
  className?: string;
  // BannerTitleClass n'est plus nécessaire car le titre est dans l'image
}

const Banner: React.FC<BannerProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`
        relative 
        /* 1. Chargement de l'image unique */
        bg-[url('/images/banniere.png')] 
        
        /* 2. FORCE LE CENTRAGE HORIZONTAL ET VERTICAL (Correctif Mobile) */
        bg-center 
        
        /* 3. COUVRE TOUTE LA ZONE SANS DÉFORMER */
        bg-cover 
        
        /* 4. ÉVITE LA RÉPÉTITION */
        bg-no-repeat 
        
        /* 5. HAUTEUR DE LA BANNIÈRE */
        h-[33vh]      /* Hauteur sur Mobile */
        md:h-[60vh]   /* Hauteur sur Ordinateur */
        
        /* 6. CLASSES SUPPLÉMENTAIRES ÉVENTUELLES */
        ${className} 
       `}
    >
      {/* Puisque l'image contient tout (logos, texte, fond), 
        le conteneur reste vide.
      */}
    </div>
  );
};

export default Banner;