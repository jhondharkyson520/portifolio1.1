import React, { useRef } from 'react';
import IconGallery from "../../components/IconsGalerryHome";
import { useLanguage } from "../../provider/LanguageProvider";


interface SkillsProps {
  skillsRef: React.RefObject<HTMLDivElement>;
}

export function Skills() {
  const { languageMode } = useLanguage();
  const skillsRef = useRef(null);

  return (
    <div>
      <SkillsContent skillsRef={skillsRef} />
    </div>
  );
}

function SkillsContent({ skillsRef }: SkillsProps) {
  const { languageMode } = useLanguage();

  return (
    <div className='flex-col sm:mt-10 w-full mt-10 items-center text-center justify-center' id='skills' ref={skillsRef}>
      
      <p className='text-xl' data-aos="zoom-in" data-aos-delay="150">
        {languageMode ? <><i className='text-3xl'>🚀 </i> <strong>My main skills are:</strong></> : <><i className='text-3xl'>🚀 </i> <strong>Minhas principais habilidades são:</strong></>}
      </p>
      <IconGallery />
    </div>
  );
}
