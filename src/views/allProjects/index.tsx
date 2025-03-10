import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../../provider/LanguageProvider';
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoGithub
} from 'react-icons/bi';
import { SiFirebase } from 'react-icons/si';

export function AllProjects() {
  const { languageMode } = useLanguage();

  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    {
      name: 'WebCarros',
      description: languageMode
        ? 'Used car platform'
        : 'Plataforma de carros usados',
      technologies: (
        <>
          <BiLogoHtml5 size={35} color='#DE4B25' />
          <BiLogoReact size={35} color='#66DBFB' />
          <BiLogoTypescript size={35} color='#377CC8' />
          <BiLogoTailwindCss size={35} color='#7ee4e7' />
          <SiFirebase size={35} color='#e7bf0d' />
        </>
      ),
      githubLink: 'https://github.com/jhondharkyson520/webcarros',
    },
    {
      name: 'Cart',
      description: languageMode
        ? 'Mini Marketplace, product list, with shopping cart'
        : 'Mini Marketplace, lista de produtos, com carrinho de compras',
      technologies: (
        <>
          <BiLogoHtml5 size={35} color='#DE4B25' />
          <BiLogoReact size={35} color='#66DBFB' />
          <BiLogoTypescript size={35} color='#377CC8' />
          <BiLogoTailwindCss size={35} color='#7ee4e7' />
        </>
      ),
      githubLink: 'https://github.com/jhondharkyson520/cart',
    },
    {
      name: 'Cripto',
      description: languageMode
        ? 'Cryptocurrency price checker app'
        : 'Aplicação para consulta de preços de criptomoedas',
      technologies: (
        <>
          <BiLogoHtml5 size={35} color='#DE4B25' />
          <BiLogoReact size={35} color='#66DBFB' />
          <BiLogoTypescript size={35} color='#377CC8' />
          <BiLogoCss3 size={35} color='#0974BC' />
        </>
      ),
      githubLink: 'https://github.com/jhondharkyson520/cripto',
    },
    {
      name: 'Dev link',
      description: languageMode
        ? 'System to save favorite links'
        : 'Sistema para salvar links favoritos',
      technologies: (
        <>
          <BiLogoHtml5 size={35} color='#DE4B25' />
          <BiLogoReact size={35} color='#66DBFB' />
          <BiLogoTypescript size={35} color='#377CC8' />
          <BiLogoTailwindCss size={35} color='#7ee4e7' />
          <SiFirebase size={35} color='#e7bf0d' />
        </>
      ),
      githubLink: 'https://github.com/jhondharkyson520/devlink',
    },
  ];

  return (
    <div
      className="w-full flex-col mx-auto mt-10 mb-10 sm:mt-20"
      style={{ scrollBehavior: 'smooth' }}
    >
      <p
        className="text-2xl font-bold text-center mb-8"
        data-aos="zoom-in"
        data-aos-delay="150"
      >
        <strong>{languageMode ? 'Other Applications' : 'Outras Aplicações'}</strong>
      </p>

      <div className="px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <h3 className="text-xl font-semibold mb-2 text-black">{project.name}</h3>
            <p className="text-sm text-black mb-4">{project.description}</p>
            <p className="text-sm text-black mb-4 flex-row flex items-center">
              <strong>{languageMode ? 'Technologies:' : 'Tecnologias:'}</strong>{' '}
              {project.technologies}
            </p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <button className="flex items-center flex-row bg-sky-700 px-4 py-1 rounded-lg hover:scale-110 transition-transform">
                {languageMode ? 'View on GitHub' : 'Ver no GitHub'}{' '}
                <BiLogoGithub size={30} color="#FFFFFF" />
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
