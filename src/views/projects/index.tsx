import { Link } from "react-router-dom";
import ScrollToTopButton from "../../components/ButtonScrollToTop";
import WhatsAppButton from "../../components/ButtonWhatsApp";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import SCGPimg from '../../assets/projectsConstruct/SGCP.png'
import { useTheme } from "../../provider/ThemeProvider";
import { useLanguage } from "../../provider/LanguageProvider";
import { useRef } from "react";
import { FaFolderTree } from "react-icons/fa6";

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
import { TbBrandNextjs } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { SiStyledcomponents, SiFirebase, SiSass, SiPrisma, SiExpress, SiFigma  } from "react-icons/si";

import imgPelicer from '../../assets/projects/imgPelicer.svg';
import imgSorveteria from '../../assets/projects/imgSorveteria.svg';
import imgAgency from '../../assets/projects/imgAgency.svg';
import imgConsult from '../../assets/projects/imgConsult.svg';
import imgNotes from '../../assets/projects/imgColorNotes.svg';
import imgDiet from '../../assets/projects/imgDietHome.svg';


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
    <div className=" w-full flex items-center justify-center">
      <ProjectsContent projectsRef={projectsRef} />
    </div>
  );
}

function ProjectsContent({ projectsRef }: ProjectsProps) {
  const { themeMode } = useTheme();
  const { languageMode } = useLanguage();

  const projects = [
    
    
    {
      title: languageMode ? "Clinic Management System" : "Gestão de Clínicas",
      description: languageMode ? 
      "Complete system for medical clinics, with features such as appointment scheduling, patient management and financial control. The application has a robust backend and a dynamic frontend to optimize the user experience." 
      
      : "Sistema completo para clínicas médicas, com funcionalidades como agendamento de consultas, gerenciamento de pacientes e controle financeiro. A aplicação possui um backend robusto e um frontend dinâmico para otimizar a experiência dos usuários.",
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
        <TbBrandNextjs size={40} />
        <FcLinux size={40}  />

      </>,
      imgSrc: `${imgConsult}`,
      previewLink: "https://clinic-frontend-hazel.vercel.app/signup",
      githubLink: "https://github.com/jhondharkyson520/clinic-backend",
    },
      
    {
      title: languageMode ? "Task Management App" : "Aplicativo de Gerenciamento de Tarefas",
      description: languageMode ? 
        "description hhere" 
      : 
        "Aplicativo web para gerenciamento de tarefas, com um backend construído utilizando Node.js, Express, TypeScript e PostgreSQL.",
      icon: <>
        <BiLogoReact size={40} color='#66DBFB' />
        <BiLogoNodejs size={40} color='#5FAE4B' />
        <BiLogoPostgresql size={40} color='#32648C' />
        <SiPrisma size={40} color='#558D6C' />
        <SiExpress size={40} color='#636464' />
        <BiLogoDocker size={40} color='#1B63ED' />
        <BiLogoGit size={40} color='#F05639' />
      </>,
      imgSrc: `${imgNotes}`,
      previewLink: "https://color-notes-ke3m.vercel.app/",
      githubLink: "https://github.com/jhondharkyson520/corelab",
    },
    {
      title: languageMode ? "Diet AI" : "Dieta IA",
      description: languageMode ? 
        "Description here" 
      : 
        "Aplicação full-stack para gestão de dietas, permitindo que usuários criem planos alimentares personalizados utilizando inteligencia artificial. Conta com um backend robusto e um frontend intuitivo.",
      icon: <>
        <BiLogoReact size={40} color='#66DBFB' />
        <BiLogoNodejs size={40} color='#5FAE4B' />
        <BiLogoDocker size={40} color='#1B63ED' />
        <BiLogoGit size={40} color='#F05639' />
      </>,
      imgSrc: `${imgDiet}`,
      previewLink: "https://gemini-diet-frontend.vercel.app/",
      githubLink: "https://github.com/jhondharkyson520/GeminiDietNode",
    },
    {
      title: languageMode ? "Tire machine" : "Fábrica de Máquinas",
      description: languageMode ? 

        "Institutional website for a tire vulcanization machine factory. The project features a responsive design, animations and an engaging interface for visitors. Access at: https://fabiopelicermaquinas.com.br/ " 
        
        : "Site institucional para uma fábrica de máquinas de vulcanização de pneus. O projeto conta com um design responsivo, animações e uma interface envolvente para os visitantes. Acesse em: https://fabiopelicermaquinas.com.br/",
      icon: <>

        <BiLogoHtml5 size={40} color='#DE4B25' />
        <BiLogoCss3 size={40} color='#0974BC' />
        <SiSass size={40} color='#C76495' />
        <BiLogoJavascript size={40} color='#F0DB4F' />
        <BiLogoGit size={40} color='#F05639' />
        <FaFolderTree size={40} color='#303030'/>

      </>,
      imgSrc: `${imgPelicer}` ,
      previewLink: "https://fabiopelicermaquinas.com.br/",
      githubLink: "https://github.com/jhondharkyson520/Pelicer-M-quinas",
    },
    {
      title: languageMode ? "Ice Cream Shop" : "Sorveteria",
      description: languageMode ? 
        
        "Modern and responsive landing page for an ice cream shop, highlighting the products and offering an attractive visual experience. Access it at: https://sorveteriapinguimfronteira.com/" 
        
        : "Landing page moderna e responsiva para uma sorveteria, destacando os produtos e oferecendo uma experiência visual atrativa. Acesse em: https://sorveteriapinguimfronteira.com/",
      icon: <>

        <BiLogoHtml5 size={40} color='#DE4B25' />
        <BiLogoCss3 size={40} color='#0974BC' />
        <SiStyledcomponents size={40} color='#FA95DD' />
        <BiLogoReact size={40} color='#66DBFB' />
        <BiLogoTypescript size={40} color='#377CC8' />        
        <BiLogoGit size={40} color='#F05639' />

      </>,
      imgSrc: `${imgSorveteria}` ,
      previewLink: "https://sorveteriapinguimfronteira.com/",
      githubLink: "https://github.com/jhondharkyson520/ice-cream",
    },
    {
      title: languageMode ? "Agency" : "Agência",
      description: languageMode ? 
      
        "I developed a landing page for an agency using React.js and Styled Components to create a modern and responsive interface. The application was built with TypeScript to ensure robust and typed code, and Git was used for version control and collaboration. The project focuses on an attractive and efficient visual presentation, highlighting the shop's products and other information." 
        
        : "Desenvolvi uma landing page para uma agência utilizando React.js e Styled Components para criar uma interface moderna e responsiva. A aplicação foi construída com TypeScript para garantir um código robusto e tipado, e o Git foi usado para controle de versão e colaboração. O projeto foca em uma apresentação visual atraente e eficiente, destacando os produtos e outras informações.",
      icon: <>

        <BiLogoHtml5 size={40} color='#DE4B25' />
        <BiLogoCss3 size={40} color='#0974BC' />
        <SiStyledcomponents size={40} color='#FA95DD' />
        <BiLogoReact size={40} color='#66DBFB' />
        <BiLogoTypescript size={40} color='#377CC8' />        
        <BiLogoGit size={40} color='#F05639' />

      </>,
      imgSrc: `${imgAgency}` ,
      previewLink: "https://agency-nine-psi.vercel.app/",
      githubLink: "https://github.com/jhondharkyson520/agency",
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
      imgSrc: `${imgConsult}`,
      previewLink: "https://www.figma.com/file/1gMKTDd2qgzte1SN8sCudK/Sistema-de-Gest%C3%A3o-de-Cl%C3%ADnica-de-Psic%C3%B3logos?type=design&node-id=0-1&mode=design&t=RXrt8aBTVODIisiK-0",
      githubLink: "https://github.com/jhondharkyson520/clinicapsicologia",
    }
  ];

  const handleOthersApps = () => {
    window.location.href = '/projects';
  };

  return (
    <div className=" max-w-6xl mt-16 items-center text-center justify-center" id="projects" ref={projectsRef}  >

    

      <p className="text-xl pt-11">
        {languageMode ? <><i className="text-3xl" >🌟 </i> <strong>Here are some of my projects:</strong></> : <><i className="text-3xl">🌟 </i> <strong>Aqui estão alguns dos meus projetos:</strong></>}
      </p>

      <div className="grid grid-cols-1 sm:flex sm:flex-wrap justify-center items-center" >
      {projects.map((project, index) => (
          <div key={index} className="w-full p-8" data-aos="fade-up" data-aos-delay="300">
            <div className="sm:flex grid grid-cols-1 mt-9 gap-8 items-center justify-center "   >
             
             
              <img 
                  src={project.imgSrc} 
                  title="Pré-visualização do site" 
                  className="rounded-2xl sm:max-w-xl w-full " 
                />

                <div className="flex flex-col items-center justify-center text-center" >
                  <span>
                    <p className="font-bold">{project.title}</p>
                    <p className="font-medium">{languageMode ? <>Description:</> : <>Descrição:</>}</p>
                    <p>{project.description}</p>
                  </span>

                  <div
                    className={`mt-3 sm:flex grid grid-cols-6 items-center justify-center text-center`}
                 
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

        
      </div>
      <button onClick={handleOthersApps} className="items-center justify-center flex-row bg-sky-700 px-4 py-1 rounded-lg hover:scale-110 transition-transform">
        Ver outros aplicativos web
      </button>
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}