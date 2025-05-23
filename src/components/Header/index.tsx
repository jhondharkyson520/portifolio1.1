import { Link } from 'react-router-dom';
import iconLondon from '../../assets/iconLondon.png';
import iconBrazil from '../../assets/iconBrazil.png';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from '../../provider/ThemeProvider';
import { useLanguage } from '../../provider/LanguageProvider';

  
export function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const { toggleTheme, themeMode } = useTheme();
    const {toggleLanguage, languageMode} = useLanguage();

    

    useEffect(() => {
        document.body.classList.toggle('dark-mode', themeMode);
      }, [themeMode]);

    useEffect(() => {
        
      }, [languageMode]);
    useEffect(() => {
        if (openMenu) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }    
        
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [openMenu]);

    const handleScrollToSkills = (event: any) => {
        event.preventDefault(); 
    
        const element = document.getElementById("skills");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start", 
            });
        }
    };
    

    const handleScrollToProjects = (event: any) => {
        event.preventDefault(); 
    
        const element = document.getElementById("projects");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start", 
            });
        }       
    };

    return (
        <header className={`mt-8 h-20 shadow-xl`}>
            
            

            <div className=" w-full flex justify-center items-center  ">
                
               

                <nav className="flex  text-2xl  items-center justify-center  gap-8  ">
                    <Link 
                        to="/" 
                        className={`hidden md:flex ${themeMode ? 'text-white' : 'text-black'} 
                        hover:text-custom-blue-hover-text hover:scale-110 transition-transform duration-[800ms] ease-in-out`}
                        
                    >
                        {languageMode ? 'Home Page' : 'Página Inicial'}
                    </Link>

                    <Link 
                        to="#skills"
                        onClick={handleScrollToSkills} 
                        className={`hidden md:flex ${themeMode ? 'text-white' : 'text-black'} 
                        hover:text-custom-blue-hover-text hover:scale-110 transition-transform duration-[800ms] ease-in-out`}
                        
                    >
                        {languageMode ? 'Skills' : 'Habilidades'}
                    </Link>

                    <Link 
                        to="#projects" 
                        onClick={handleScrollToProjects}
                        className={`hidden md:flex ${themeMode ? 'text-white' : 'text-black'} 
                        hover:text-custom-blue-hover-text hover:scale-110 transition-transform duration-[1000ms] ease-in-out`}
                        
                    >
                        {languageMode ? 'Projects' : 'Projetos'}
                    </Link>

                    <a 
                        href="https://www.linkedin.com/in/jhon-mendon%C3%A7a-203925163/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:scale-110 transition-transform duration-[800ms] ease-in-out"
                    >
                        <FaLinkedinIn 
                            className="FaLinkedinIn" 
                            size={35} 
                            style={{ color: '#087BB9'}} 
                        />
                    </a>

                    <a 
                        href="https://github.com/jhondharkyson520" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:scale-110 transition-transform duration-[800ms] ease-in-out"
                    >
                        <FaGithub 
                            className={`FaWhatsapp ${themeMode ? 'text-white' : 'text-black' }`}
                            size={35}
                        />
                    </a>

                    <button 
                                onClick={toggleTheme} 
                                className='flex flex-col items-center justify-center text-base
                                hover:text-custom-blue-hover-text hover:scale-110 transition-transform duration-[800ms] ease-in-out'
                    >
                                { themeMode ? 
                                    <>  
                                        <MdLightMode size={30} />  
                                    </> 
                                    : 
                                    <>
                                        <MdDarkMode size={30} /> 
                                    </> 
                                }
                    </button>

                    

                    <button
                        onClick={toggleLanguage}
                        className='flex items-center justify-center text-base 
                        hover:text-custom-blue-hover-text hover:scale-110 transition-transform duration-[800ms] ease-in-out'
                        style={{ width: '80px' }}
                        
                    >
                        {languageMode ? 
                            <>
                                <img src={iconBrazil} alt="Português" width={30} />
                                Pt-BR
                            </>                            
                        :                             
                            <>
                                <img src={iconLondon} alt="English" width={30} />
                                En
                            </>
                        }
                    </button>
                </nav>

            </div>
        </header>
    );
}
