import React, { useRef } from 'react';
import IconGallery from "../../components/IconsGalerryHome";
import { useLanguage } from "../../provider/LanguageProvider";
import { BiLogoGithub } from 'react-icons/bi';


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

  const experiences = [
    {
      title: languageMode
        ? 'Web Developer Freelance'
        : 'Desenvolvedor Web Freelance',
      company: 'Fábio Pelicer Máquinas',
      period: 'Mai 2024 - Jun 2024',
      description: languageMode
        ? 'Development of an institutional website for a vulcanization machine factory, including product catalog and interactive animations.'
        : 'Desenvolvimento de um site institucional para uma fábrica de máquinas de vulcanização, incluindo catálogo de produtos e animações interativas.',
      technologies: 'HTML, SASS, JavaScript',
      link: 'https://fabiopelicermaquinas.com.br',
    },
    {
      title: languageMode
        ? 'Web Developer Freelance'
        : 'Desenvolvedor Web Freelance',
      company: 'Sorveteria Pinguim Fronteira',
      period: 'Abr 2024 - Mai 2024',
      description: languageMode
        ? 'Created a responsive landing page for an ice cream shop with interactive animations, focusing on user experience.'
        : 'Criação de uma landing page para uma sorveteria com design responsivo e animações interativas, focando na experiência do usuário.',
      technologies: 'React, TypeScript, Styled Components',
      link: 'https://sorveteriapinguimfronteira.com',
    },
  ];


  return (
    <div className='flex-col sm:mt-10 w-full mt-10 items-center text-center justify-center' id='skills' ref={skillsRef}>
      
      <p className='text-xl' data-aos="zoom-in" data-aos-delay="150">
        {languageMode ? <><i className='text-3xl'>🚀 </i> <strong>Tech Stack Main:</strong></> : <><i className='text-3xl'>🚀 </i> <strong>Tech Stack Principal: </strong></>}
      </p>
      <IconGallery />
      
      <h1 className='mt-16 text-2xl'><strong>Experiência profissional</strong></h1>
      <div className="mt-8 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <h3 className="text-xl font-semibold mb-2 text-black">{experience.title}</h3>
            <p className="text-sm text-black mb-4">{experience.company}</p>
            <p className="text-sm text-black mb-4  items-center">
              <strong>{languageMode ? 'Period: ' : 'Período: '}</strong>
              {experience.period}
            </p>
            <p className="text-sm text-black mb-4 items-center">
              <strong>{languageMode ? 'Description: ' : 'Descrição: '}</strong>{' '}
              {experience.description}
            </p>
            <p className="text-sm text-black mb-4 items-center">
              <strong>{languageMode ? 'Technologies: ' : 'Tecnologias: '}</strong>{' '}
              {experience.technologies}
            </p>
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <button className="bg-sky-700 px-4 py-1 rounded-lg hover:scale-110 transition-transform">
                {languageMode ? 'Acess' : 'Acessar'}{' '}
              </button>
            </a>
          </div>
        ))}
      
      </div>
    </div>
  );
}
