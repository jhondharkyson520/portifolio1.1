import React, { useState } from 'react';
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoTailwindCss, 
  BiLogoGit,
  BiLogoNodejs,
} from 'react-icons/bi';
import './index.css';

const iconsData = [
  {
    name: 'HTML5',
    icon: <BiLogoHtml5 size={90} color='#DE4B25' />,
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    info: 'HTML5 é a versão mais recente do HTML. É usado para estruturar conteúdo na web.',
  },
  {
    name: 'CSS3',
    icon: <BiLogoCss3 size={90} color='#0974BC' />,
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    info: 'CSS3 é a versão mais recente do CSS. É usado para estilizar páginas da web.',
  },
  {
    name: 'TypeScript',
    icon: <BiLogoTypescript size={90} color='#377CC8' />,
    url: 'https://www.typescriptlang.org/docs/',
    info: 'TypeScript é um superset tipado do JavaScript, projetado para construir grandes aplicativos.',
  },
  {
    name: 'React',
    icon: <BiLogoReact size={90} color='#66DBFB' />,
    url: 'https://pt-br.reactjs.org/docs/getting-started.html',
    info: 'React é uma biblioteca JavaScript para construir interfaces de usuário.',
  },
  {
    name: 'Tailwind CSS',
    icon: <BiLogoTailwindCss size={90} color='#3EBFF8' />,
    url: 'https://tailwindcss.com/docs',
    info: 'Tailwind CSS é um framework CSS "utility-first" para criar designs personalizados rapidamente.',
  },
  {
    name: 'Git',
    icon: <BiLogoGit size={90} color='#F05639' />,
    url: 'https://git-scm.com/doc',
    info: 'Git é um sistema de controle de versão distribuído usado para rastrear alterações no código-fonte durante o desenvolvimento de software.',
  },
  {
    name: 'Node.js',
    icon: <BiLogoNodejs size={90} color='#5FAE4B' />,
    url: 'https://nodejs.org/pt-br/docs/',
    info: 'Node.js é uma runtime JavaScript construída no motor V8 do Chrome.',
  },
];

const IconGallery: React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<{ name: string; info: string } | null>(null);

  const handleIconClick = (url: string) => {
    window.open(url, '_blank');
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='flex flex-col items-center mt-8'>
      <div className='sm:flex grid grid-cols-2 items-center justify-center'>
        {iconsData.map((data, index) => (
          <div
            key={index}
            className='relative cursor-pointer'
            onMouseEnter={() => {
              handleMouseEnter(index);
              setSelectedIcon(data);
            }}
            onMouseLeave={() => {
              handleMouseLeave();
              setSelectedIcon(null);
            }}
            onClick={() => handleIconClick(data.url)}
          >
            <div
              className={`icon-container hover:transform hover:scale-110 ${hoveredIndex === index ? 'z-10' : 'z-0'}`}
            >
              {data.icon}
            </div>
          </div>
        ))}
      </div>
      {selectedIcon && (
        <div className='bg-blue-100 p-4 mt-4 rounded-lg z-10'>
          <h3 className='text-xl font-semibold'>{selectedIcon.name}</h3>
          <p className='text-gray-600'>{selectedIcon.info}</p>
        </div>
      )}
    </div>
  );
};

export default IconGallery;