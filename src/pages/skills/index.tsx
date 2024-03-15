import React, { useRef } from 'react';
import IconGallery from "../../components/IconsGalerryHome";
import { useLanguage } from "../../provider/LanguageProvider";

interface SkillsProps {
  skillsRef: React.RefObject<HTMLDivElement>;
}

export function Skills() {
  const { languageMode } = useLanguage();
  const skillsRef = useRef(null); // Criação da referência

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
      <p className='text-xl'>
        {languageMode ? <>🚀 My main skills are:</> : <>🚀 Minhas principais habilidades são:</>}
      </p>
      <IconGallery />
    </div>
  );
}
