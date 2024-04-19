import { Link } from 'react-router-dom';
import logoS from '../../assets/logoHeaderLight.png';
import iconLondon from '../../assets/iconLondon.png';
import iconBrazil from '../../assets/iconBrazil.png';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from '../../provider/ThemeProvider';
import { useLanguage } from '../../provider/LanguageProvider';

interface HeaderProps {
    skillsRef: React.RefObject<HTMLDivElement>,
    projectsRef: React.RefObject<HTMLDivElement>,
  }

export function Header({ skillsRef, projectsRef }: HeaderProps) {
    const [openMenu, setOpenMenu] = useState(false);
    const { toggleTheme, themeMode } = useTheme();
    const {toggleLanguage, languageMode} = useLanguage();

    useEffect(() => {
        document.body.classList.toggle('dark-mode', themeMode);
      }, [themeMode]);

    useEffect(() => {
        
      }, [languageMode]);

        
      
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const closeMenu = () => {
        setOpenMenu(false);
    };

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

    const handleScrollToSkills = () => {
        closeMenu();
        if (skillsRef.current) {
          skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        
    };

    const handleScrollToProjects = () => {
        closeMenu();
        if (projectsRef.current) {
          projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        }        
    };

    return (
        <header className={`p-4 h-30 sm:h-36 `}>
            <div className="container mx-auto flex justify-center items-center h-14 ">
                <Link to='/'>
                    <img
                        src={logoS}
                        alt="Logo"
                        className='sm:w-1/3 w-1/4 sm:rounded-full mb-0 sm:mt-14 mt-12 rounded-full '
                    />
                </Link>
                <button
                    className="text-black sm:hidden hover:text-amber-400 sm:mb-0 mt-8"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        {openMenu ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {openMenu && (
                    <div className="sm:hidden  fixed inset-0 bg-white h-full z-50">

                        <button
                            onClick={closeMenu}
                            className="absolute top-4 right-4 text-black hover:text-custom-blue-hover-text"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        <nav 
                            className={
                                `${themeMode ? 'bg-theme-dark-projects': 'bg-theme-light-projects' } 
                                flex flex-col items-center justify-center h-full text-2xl gap-4 `}
                        >
                            
                            <a 
                                onClick={closeMenu} 
                                href='/' 
                                className={
                                    `${themeMode ? 'text-white': 'text-black' } 
                                    hover:text-custom-blue-hover-text hover:scale-110 
                                    hover:transition-all`}
                            >

                                {languageMode ? <>Home Page</> : <>Página Inicial </>} 

                            </a>


                            <a 
                                onClick={handleScrollToSkills} 
                                href='#skills' 
                                className={
                                    `${themeMode ? 'text-white': 'text-black' }
                                hover:text-custom-blue-hover-text hover:scale-110 
                                hover:transition-all`}
                            >

                                {languageMode ? <>Skills</> : <>Habilidades</>}
                                
                            </a>


                            <a 
                                onClick={handleScrollToProjects} 
                                href='#projects' 
                                className={
                                    `${themeMode ? 'text-white': 'text-black' } 
                                    hover:text-custom-blue-hover-text hover:scale-110 
                                    hover:transition-all`}
                            >

                                {languageMode ? <>Projects</> : <>Projetos</>}

                            </a>


                            <a 
                                href="https://www.linkedin.com/in/jhon-mendon%C3%A7a-203925163/" 
                                target="_blank" 
                                className="hover:scale-125 hover:transition-all"
                            >

                                <FaLinkedinIn 
                                    className="FaLinkedinIn" 
                                    size={35} 
                                    style={{ color: '#087BB9' }}
                                 />

                            </a>


                            <a 
                                href="https://github.com/jhondharkyson520" 
                                target="_blank" 
                                className="hover:scale-125 hover:transition-all"
                            >

                                <FaGithub 
                                    className={`FaWhatsapp ${themeMode ? 'text-white' : 'text-black' }`}
                                    size={35} 
                                />

                            </a>

                            <button 
                                onClick={toggleTheme} 
                                className='flex flex-col items-center justify-center text-base
                                hover:text-custom-blue-hover-text hover:scale-110 hover:transition-all'
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
                                className="flex flex-col items-center justify-center text-base 
                                hover:text-custom-blue-hover-text hover:scale-110 hover:transition-all"
                            >

                                {languageMode ? (
                                    <>
                                    <img src={iconLondon} alt="English" width={30} />
                                    </>
                                ) : (
                                    <>
                                    <img src={iconBrazil} alt="Português" width={30} />
                                    </>
                                )}

                            </button>
                        </nav>
                    </div>
                )}

                <nav className="hidden md:flex sm:mt-16 text-2xl mt-6 items-center">
                    <Link 
                        to="/" 
                        className={`mr-4 ${themeMode ? 'text-white' : 'text-black'} 
                        hover:text-custom-blue-hover-text hover:scale-110 hover:transition-all`}
                        style={{ width: '150px' }}
                    >
                        {languageMode ? 'Home Page' : 'Página Inicial'}
                    </Link>

                    <Link 
                        to="#skills"
                        onClick={handleScrollToSkills} 
                        className={`${themeMode ? 'text-white' : 'text-black'} 
                        hover:text-custom-blue-hover-text hover:scale-110 hover:transition-all mr-2`}
                        style={{ width: '150px' }}
                    >
                        {languageMode ? 'Skills' : 'Habilidades'}
                    </Link>

                    <Link 
                        to="#projects" 
                        onClick={handleScrollToProjects}
                        className={`${themeMode ? 'text-white' : 'text-black'} 
                        hover:text-custom-blue-hover-text hover:scale-110 hover:transition-all`}
                        style={{ width: '150px' }}
                    >
                        {languageMode ? 'Projects' : 'Projetos'}
                    </Link>

                    <a 
                        href="https://www.linkedin.com/in/jhon-mendon%C3%A7a-203925163/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mr-8 hover:scale-110 hover:transition-all"
                    >
                        <FaLinkedinIn 
                            className="FaLinkedinIn" 
                            size={35} 
                            style={{ color: '#087BB9', width: '35px', height: '35px' }} 
                        />
                    </a>

                    <a 
                        href="https://github.com/jhondharkyson520" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:scale-110 hover:transition-all"
                    >
                        <FaGithub 
                            className={`FaWhatsapp ${themeMode ? 'text-white' : 'text-black' }`}
                            size={35} 
                            style={{ width: '35px', height: '35px' }} 
                        />
                    </a>

                    <button 
                        onClick={toggleTheme} 
                        className='flex flex-col items-center text-base
                        hover:text-custom-blue-hover-text hover:scale-110 hover:transition-all'
                        style={{ width: '150px' }}
                    >
                        {themeMode ? 
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
                        hover:text-custom-blue-hover-text hover:scale-110 hover:transition-all'
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
