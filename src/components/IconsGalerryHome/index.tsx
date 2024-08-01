import React, { useState } from 'react';
import { useLanguage } from '../../provider/LanguageProvider';
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoNodejs,
  BiLogoJavascript,
  BiLogoDocker,
  BiLogoPostgresql, 
} from 'react-icons/bi';
import { SiExpress, SiStyledcomponents } from "react-icons/si";
import './index.css';
import { useTheme } from '../../provider/ThemeProvider';






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

  const { languageMode } = useLanguage();

  const iconsData = [
    {
      name: 'HTML5',
      icon: <BiLogoHtml5 size={90} color='#DE4B25' />,
      url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
      info: languageMode ? 
      'HTML5 is the latest version of HTML. It`s used to structure content on the web.' 
      : 
      'HTML5 é a versão mais recente do HTML. É usada para estruturar conteúdo na web.',
    },
    {
      name: 'CSS3',
      icon: <BiLogoCss3 size={90} color='#0974BC' />,
      url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
      info: languageMode ? 
      'CSS3 is the latest version of CSS. It`s used to style web pages.' 
      : 
      'CSS3 é a versão mais recente do CSS. É usado para estilizar páginas da web.',
    },
    {
      name: 'TypeScript',
      icon: <BiLogoTypescript size={90} color='#377CC8' />,
      url: 'https://www.typescriptlang.org/docs/',
      info: languageMode ? 
      'TypeScript is a typed superset of JavaScript designed for building large applications.'
      : 
      'TypeScript é um superset tipado do JavaScript, projetado para construir grandes aplicativos.',
    },
    {
      name: 'React',
      icon: <BiLogoReact size={90} color='#66DBFB' />,
      url: 'https://pt-br.reactjs.org/docs/getting-started.html',
      info: languageMode ? 
      'React is a JavaScript library for building user interfaces.' 
      : 
      'React é uma biblioteca JavaScript para construir interfaces de usuário.',
    },
    {
      name: 'Tailwind CSS',
      icon: <BiLogoTailwindCss size={90} color='#3EBFF8' />,
      url: 'https://tailwindcss.com/docs',
      info: languageMode ? 
      'Tailwind CSS is a "utility-first" CSS framework for quickly building custom designs.' 
      : 
      'Tailwind CSS é um framework CSS "utility-first" para criar designs personalizados rapidamente.',
    },
    {
      name: 'Styled Components',
      icon: <SiStyledcomponents size={90} color='#FA95DD' />,
      url: 'https://styled-components.com/',
      info: languageMode ? 
        'Styled Components is a library for React and React Native that allows you to use component-level styles in your application. It uses tagged template literals to style your components.' 
        : 
        'Styled Components é uma biblioteca para React e React Native que permite usar estilos a nível de componente em sua aplicação. Ele usa template literals com marcação para estilizar seus componentes.',
    },    
    {
      name: 'Git',
      icon: <BiLogoGit size={90} color='#F05639' />,
      url: 'https://git-scm.com/doc',
      info: languageMode ? 
      'Git is a distributed version control system used to track changes in source code during software development.' 
      : 
      'Git é um sistema de controle de versão distribuído usado para rastrear alterações no código-fonte durante o desenvolvimento de software.',
    },
    {
      name: 'JavaScript', // Novo objeto para o JavaScript
      icon: <BiLogoJavascript size={90} color='#F0DB4F' />, // Ícone do JavaScript
      url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
      info: languageMode ? 
      'JavaScript is a programming language used to add interactivity to web pages.' 
      : 
      'JavaScript é uma linguagem de programação usada para adicionar interatividade a páginas da web.',
    },
    {
      name: 'Node.js',
      icon: <BiLogoNodejs size={90} color='#5FAE4B' />,
      url: 'https://nodejs.org/pt-br/docs/',
      info: languageMode ? 
      'Node.js is a JavaScript runtime built on Chrome`s V8 JavaScript engine.' 
      : 
      'Node.js é uma runtime JavaScript construída no motor V8 do Chrome.',
    },
    {
      name: 'Docker',
      icon: <BiLogoDocker size={90} color='#1B63ED' />,
      url: 'https://www.docker.com/',
      info: languageMode ? 
      'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.' 
      : 
      'Docker é um conjunto de produtos de plataforma como serviço que usam virtualização em nível de sistema operacional para entregar software em pacotes chamados de contêineres.',
    },
    {
      name: 'Postgres',
      icon: <BiLogoPostgresql size={90} color='#32648C' />,
      url: 'https://www.postgresql.org/docs/',
      info: languageMode ? 
      'PostgreSQL is a powerful, open source object-relational database system with a strong reputation for reliability, feature robustness, and performance.' 
      : 
      'PostgreSQL é um poderoso sistema de banco de dados objeto-relacional de código aberto com forte reputação por confiabilidade, robustez de recursos e desempenho.',
    },
    {
      name: 'Express',
      icon: <SiExpress size={90} color='#636464' />,
      url: 'https://expressjs.com/',
      info: languageMode ? 
      'Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.' 
      : 
      'Express é um framework de aplicação web minimalista e flexível para Node.js que fornece um conjunto robusto de recursos para desenvolver aplicações web e móveis.',
    }
  ];

  
  const { themeMode } = useTheme();

  return (
    <div className='flex flex-col items-center mt-8'>
      <div className='xl:flex lg:grid-cols-6 md:grid-cols-4  grid-cols-3  grid items-center justify-center'>
      
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
        <div className={` ${themeMode ? 'bg-theme-dark-projects' : 'bg-blue-100' }  p-4 mt-4 rounded-lg z-10`}>
          <h3 className='text-xl font-semibold'>{selectedIcon.name}</h3>
          <p className={`${themeMode ? 'text-white': 'text-gray-600' }`}>{selectedIcon.info}</p>
        </div>
      )}
    </div>
  );
};

export default IconGallery;