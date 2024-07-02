import { Link } from "react-router-dom";
import ScrollToTopButton from "../../components/ButtonScrollToTop";
import WhatsAppButton from "../../components/ButtonWhatsApp";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import SCGPimg from '../../assets/projectsConstruct/SGCP.png'
import { useTheme } from "../../provider/ThemeProvider";
import { useLanguage } from "../../provider/LanguageProvider";
import { useRef } from "react";

import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoJavascript,
  BiLogoDocker, 
} from 'react-icons/bi';
import { FcLinux } from "react-icons/fc";
import { SiStyledcomponents, SiFirebase, SiSass, SiPrisma, SiExpress, SiFigma  } from "react-icons/si";

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement>;
}

const iframeStyle = {
  width: '600px',
  height: '400px',
  border: 'none',
  overflow: 'hidden',
};

export function Projects() {
  const projectsRef = useRef(null);

  return (
    <div>
      <ProjectsContent projectsRef={projectsRef} />
    </div>
  );
}

function ProjectsContent({ projectsRef }: ProjectsProps) {
  const { themeMode } = useTheme();
  const { languageMode } = useLanguage();

  const projects = [
    {
      title: languageMode ? "Landing Page for a Barber Shop" : "Landing Page de uma Fábrica de Máquinas",
      description: languageMode ? 

        "This landing page was developed for a tire vulcanizing machine factory, using HTML, CSS3, and SASS. Featuring a sleek and responsive design, the page is filled with animation effects that create an engaging experience for visitors. It provides crucial information such as services offered, product list, contact details, and the factory's location. This project demonstrates a balanced combination of design and user experience. Access at: https://fabiopelicermaquinas.com.br/ " 
        
        : "Esta landing page foi desenvolvida para uma fábrica de máquinas de vulcanizar pneus, usando HTML, CSS3 e SASS. Apresentando um design elegante e responsivo, a página é repleta de efeitos de animação que criam uma experiência envolvente para os visitantes. Ela fornece informações cruciais, como serviços oferecidos, lista de produtos, contato e localização da fábrica. Este projeto demonstra uma combinação equilibrada de design e experiência do usuário. Acesse em: https://fabiopelicermaquinas.com.br/",
      icon: <>

        <BiLogoHtml5 size={40} color='#DE4B25' />
        <BiLogoCss3 size={40} color='#0974BC' />
        <SiSass size={40} color='#C76495' />
        <BiLogoJavascript size={40} color='#F0DB4F' />
        <BiLogoGit size={40} color='#F05639' />

      </>,
      previewLink: "https://fabiopelicermaquinas.com.br/",
      githubLink: "https://github.com/jhondharkyson520/pelicer1.2",
    },
    {
      title: languageMode ? "Landing Page for an Ice Cream Shop" : "Landing Page de Sorveteria",
      description: languageMode ? 
        
        "Using ReactJS, Styled Components, and TypeScript, I've created an intuitive and responsive platform. Similar to my other projects, I prioritize the balance between design and efficiency in web development. It's a presentation page created for an ice cream parlor located in the city of Fronteira-MG. Access at: https://sorveteriapinguimfronteira.com/" 
        
        : "Utilizando ReactJS, Styled Components e TypeScript, criei uma plataforma intuitiva e responsiva. Semelhante  aos meus outros projetos, priorizo o equilíbrio entre design e eficiência no desenvolvimento web. Trata  se de uma página de apresentação feito para uma sorveteria, localizada na cidade de Fronteira-MG. Acesse em: https://sorveteriapinguimfronteira.com/",
      icon: <>

        <BiLogoHtml5 size={40} color='#DE4B25' />
        <BiLogoCss3 size={40} color='#0974BC' />
        <SiStyledcomponents size={40} color='#FA95DD' />
        <BiLogoReact size={40} color='#66DBFB' />
        <BiLogoTypescript size={40} color='#377CC8' />        
        <BiLogoGit size={40} color='#F05639' />

      </>,
      previewLink: "https://sorveteriapinguimfronteira.com/",
      githubLink: "https://github.com/jhondharkyson520/ice-cream",
    },  
    {
      title: languageMode ? 'Landing Page for a Tire Repair Shop' : 'Landing Page de Borracharia',
      description: languageMode ? 

      'I developed an online platform for my tire repair shop using ReactJS, TypeScript, and styled it with Tailwind CSS. I created a modern, responsive, and intuitive interface that provides visitors with an engaging experience. Additionally, I integrated an external API to optimize communication with tire and automotive parts suppliers, ensuring that the tire shop`s inventory is always up to date. This project represents a balanced combination of web design and development and is a highlight in my portfolio.' 
      
      : "Desenvolvi uma plataforma online para minha borracharia, usando ReactJS, TypeScript e aplicando o estilo com Tailwind CSS. Criei uma interface moderna, responsiva e intuitiva que oferece aos visitantes uma experiência envolvente. Além disso, integrei uma API externa para otimizar a comunicação com fornecedores de pneus e peças automotivas, garantindo que o estoque da borracharia esteja sempre atualizado. Este projeto representa uma combinação equilibrada de design e desenvolvimento web e é um destaque no meu portfólio.",
      icon: <>

        <BiLogoHtml5 size={40} color='#DE4B25' />
        <BiLogoCss3 size={40} color='#0974BC' />
        <BiLogoTailwindCss size={40} color='#3EBFF8' />
        <BiLogoReact size={40} color='#66DBFB' />
        <BiLogoTypescript size={40} color='#377CC8' />        
        <SiFirebase size={40} color='#F68320' />
        <BiLogoGit size={40} color='#F05639' />

      </>,
      previewLink: "https://kppneus.vercel.app/",
      githubLink: "https://github.com/jhondharkyson520/kppneus",
    },
    
    {
      title: languageMode ? "Cryptocurrency List" : "Criptomoedas",
      description: languageMode ? 
      
        "I developed an impressive cryptocurrency list page using ReactJS and consuming an external cryptocurrency API. This application offers an informative and engaging experience for cryptocurrency investors. Real-time prices and data of various cryptocurrencies are presented clearly and accessibly. Additionally, the application allows customization of the list to track the most interesting cryptocurrencies. This project demonstrates my commitment to attractive design and delivering valuable information to cryptocurrency investors, making it a highlight in my portfolio." 
        
        : "Desenvolvi uma página de lista de criptomoedas impressionante usando ReactJS e consumindo uma API externa de criptomoedas. Essa aplicação oferece uma experiência informativa e envolvente para os investidores de criptomoedas. Os preços e dados em tempo real de várias criptomoedas são apresentados de forma clara e acessível. Além disso, a aplicação permite a personalização da lista para acompanhar as criptomoedas de maior interesse. Este projeto demonstra meu compromisso com o design atraente e a entrega de informações valiosas aos investidores de criptomoedas, sendo um destaque no meu portfólio.",
      icon: <>

        <BiLogoHtml5 size={40} color='#DE4B25' />
        <BiLogoCss3 size={40} color='#0974BC' />
        <BiLogoReact size={40} color='#66DBFB' />
        <BiLogoTypescript size={40} color='#377CC8' />
        <BiLogoGit size={40} color='#F05639' />

      </>,
      previewLink: "https://cripto-umber.vercel.app/",
      githubLink: "https://github.com/jhondharkyson520/cripto",
    },  
    
  ];
  
  const projectsConstruct = [
    {
      title: languageMode ? "In Development: ConsultEasy" : "Em desenvolvimento: ConsultEasy",
      description: languageMode ? "Using ReactJS, Next, CSS3, Node.js, and TypeScript, I'm creating an intuitive and responsive platform. Similar to my tire repair shop application, I prioritize the balance between modern design and efficiency in web development. The proposal includes integrating an external API to enhance communication and advanced functionalities. This project stands out for its strategic combination of technologies and design, consolidating itself as another differential in my portfolio." : "Utilizando ReactJS, Next, CSS3, Node.js e TypeScript, estou criando uma plataforma intuitiva e responsiva. Semelhante à minha aplicação para a borracharia, priorizo o equilíbrio entre design moderno e eficiência no desenvolvimento web. A proposta inclui integração de API externa para aprimorar a comunicação e funcionalidades avançadas. Este projeto destaca-se pela combinação estratégica de tecnologias e design, consolidando-se como mais um diferencial no meu portfólio.",
      icon: <>

        <BiLogoHtml5 size={40} color='#DE4B25' />
        <BiLogoCss3 size={40} color='#0974BC' />
        <SiSass size={40} color='#C76495' />
        <BiLogoReact size={40} color='#66DBFB' />
        <BiLogoTypescript size={40} color='#377CC8' />
        <BiLogoPostgresql  size={40} color='#32648C' />
        <SiPrisma  size={40} color='#558D6C' />
        <SiExpress   size={40} color='#636464' />
        <BiLogoNodejs size={40} color='#5FAE4B' />
        <BiLogoDocker size={40} color='#1B63ED' />
        <BiLogoGit size={40} color='#F05639' />
        <FcLinux size={40}  />

      </>,
      previewLink: "https://www.figma.com/file/1gMKTDd2qgzte1SN8sCudK/Sistema-de-Gest%C3%A3o-de-Cl%C3%ADnica-de-Psic%C3%B3logos?type=design&node-id=0-1&mode=design&t=RXrt8aBTVODIisiK-0",
      githubLink: "https://github.com/jhondharkyson520/clinicapsicologia",
    }
  ];


  return (
    <div className="w-full mt-16 items-center text-center justify-center" id="projects" ref={projectsRef}>
      <p className="text-xl">
        {languageMode ? <>🌟 Here are some of my projects:</> : <>🌟 Aqui estão alguns dos meus projetos:</>}
      </p>

      <div className="grid grid-cols-1 mt-10 sm:flex sm:flex-wrap justify-center items-center gap-8">
      {projectsConstruct.map((project, index) => (
          <div key={index} className="w-full p-8">
            <div className="sm:flex grid grid-cols-1 gap-8 ">
             <img 
                  src={SCGPimg} 
                  title="Pré-visualização do site" 
                  className="rounded-2xl sm:max-w-xl w-full h-96" 
                />
             
             <div className={`flex flex-col items-center justify-center p-5 rounded-2xl mt-4 sm:w-3/4 w-full ${themeMode ? 'bg-theme-dark-projects' : 'bg-theme-light-projects'}`}>
                
                <span>
                  <p className="font-bold">{project.title}</p>
                  <p className="font-medium">{languageMode ? <>Description:</> : <>Descrição:</>}</p>
                  <p>{project.description}</p>
                </span>

                <div
                  className={`mt-3 sm:flex grid grid-cols-2`}
                >
                  {project.icon}
                </div>

                <div className="relative flex flex-col justify-center h-auto mt-4 mb-6">
                  <div className="flex items-center justify-center">

                    <Link 
                      to={project.previewLink} 
                      target="_blank" 
                      className={`${themeMode ? 'text-white' : 'text-black' } 
                      hover:transition-all hover:scale-110 flex items-center px-5`}
                    >
                      
                      <AiFillEye size={25} />
                      <p className="ml-2 text-center font-medium text-lg cursor-pointer">

                      {languageMode ? <>View design</> : <>Visualizar design</>}
                      
                      </p>
                    
                    </Link>

                    <Link 
                      to={project.githubLink} 
                      target="_blank" 
                      className={`${themeMode ? 'text-white' : 'text-black' } 
                      hover:transition-all hover:scale-110 flex items-center px-5`}
                    >
                      
                      <AiFillGithub size={25} />
                      <p className="ml-2 text-center font-medium text-lg cursor-pointer">
                        
                        GitHub
                        
                      </p>
                    
                    </Link>    

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {projects.map((project, index) => (

          <div key={index} className="w-full p-8">
            <div className="sm:flex grid grid-cols-1 gap-8">
              <div className="relative justify-center bg-white border-slate-700 rounded-2xl shadow-2xl" >
                <iframe 
                  src={project.previewLink} 
                  title="Pré-visualização do site" 
                  className="rounded-2xl sm:max-w-xl w-full h-96" scrolling="no"
                >
                </iframe>
              </div>

              <div 
                className={`flex flex-col ${themeMode ? 'bg-theme-dark-projects' 
                : 'bg-theme-light-projects'} items-center justify-center p-5 
                rounded-2xl mt-4 sm:w-3/4 w-full`}
              >

                <span>
                  <p className="font-bold">
                    {languageMode ? <>Project title: {project.title}</> : <>Título do Projeto: {project.title}</>}
                  </p>
                  <p className="font-medium">{languageMode ? <>Description:</> : <>Descrição:</>}</p>
                  <p>{project.description}</p>
                </span>

                <div
                  className={`mt-3 flex icon-container`}
                >
                  {project.icon}
                </div>

                <div className="relative flex flex-col justify-center h-auto mt-4 mb-6">
                  <div className="flex items-center justify-center">

                    <Link 
                      to={project.previewLink} 
                      target="_blank" 
                      className={`${themeMode ? 'text-white' : 'text-black' } 
                      hover:transition-all hover:scale-110 flex items-center px-5`}
                    >
                      
                      <AiFillEye size={25}/>
                      <p className="ml-2 text-center font-medium text-lg cursor-pointer">

                        {languageMode ? <>View</> : <>Visualizar</>}

                      </p>
                    
                    </Link>

                    <Link 
                      to={project.githubLink} 
                      target="_blank" 
                      className={`${themeMode ? 'text-white' : 'text-black' } 
                      hover:transition-all hover:scale-110 flex items-center px-5`}
                    >
                      
                      <AiFillGithub size={25} />
                      <p className='ml-2 text-center font-medium text-lg cursor-pointer'>
                        
                        GitHub
                        
                      </p>
                    
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      
      </div>
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}