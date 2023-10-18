import { Link } from 'react-router-dom'
import logoS from '../../assets/logoheader.png'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';


export function Header() {

    const [openMenu, setOpenMenu] = useState(false);
      
    const toggleMenu = () => {
            setOpenMenu(!openMenu);
        }

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

    return (
        <header className="p-4 h-30 sm:h-36">
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
                    <div className="sm:hidden fixed inset-0 bg-white h-full z-50">
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
                        <nav className="flex flex-col items-center justify-center h-full text-2xl gap-4  bg-slate-100">
                        
                            <Link to="/" className="text-black hover:text-custom-blue-hover-text">Home</Link>

                            <Link to="/sobre" className="text-black hover:text-custom-blue-hover-text">Skills</Link>

                            <Link to="/projects" className="text-black hover:text-custom-blue-hover-text">Projects</Link>

                            <a href="https://www.instagram.com/" target="_blank" className="hover:scale-125 hover:transition-all">
                                <FaLinkedinIn className="FaLinkedinIn" size={35} style={{ color: '#087BB9' }} />
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" className="hover:scale-125 hover:transition-all">
                                <FaGithub className="FaWhatsapp" size={35} style={{ color: '#080808' }} />
                            </a>

                            <Link to="https://api.whatsapp.com/send?phone=5534998277081&text=Olá, Jhon " target="_blank">
                                <button 
                                    className="text-white bg-custom-blue-button rounded-3xl px-5 py-2 items-center 
                                    justify-center hover:bg-custom-blue-hover hover:scale-105 hover:transition-all">
                                    Fale Comigo!
                                </button>
                            </Link>
                        </nav>
                    </div>
                )}

                <nav className="items-center justify-center h-full space-x-10 hidden md:flex sm:mt-16 text-2xl mt-6">
                    <Link to="/" className="text-black hover:text-custom-blue-hover-text">Home</Link>

                    <a href="#skills" className="text-black hover:text-custom-blue-hover-text">Skills</a>

                    <a href="#projects" className="text-black hover:text-custom-blue-hover-text">Projects</a>

                    <a href="https://www.instagram.com/" target="_blank" className="hover:scale-125 hover:transition-all">
                        <FaLinkedinIn className="FaLinkedinIn" size={35} style={{ color: '#087BB9' }} />
                    </a>

                    <a href="https://www.instagram.com/" target="_blank" className="hover:scale-125 hover:transition-all">
                        <FaGithub className="FaWhatsapp" size={35} style={{ color: '#080808' }} />
                    </a>

                    <Link to="https://api.whatsapp.com/send?phone=5534998277081&text=Olá, Jhon " target="_blank">
                        <button 
                            className="text-white bg-custom-blue-button rounded-3xl px-5 py-2 items-center 
                            justify-center hover:bg-custom-blue-hover hover:scale-105 hover:transition-all">
                            Fale Comigo!
                        </button>
                    </Link>
                </nav>
            </div>

        </header>
    )
}