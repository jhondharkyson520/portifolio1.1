import { Link } from 'react-router-dom'
import logoS from '../../assets/logoheader.png'
import { useState } from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';


export function Header() {
    const [openMenu, setOpenMenu] = useState(false);
  

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const closeMenu = () => {
        setOpenMenu(false);
    };

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
                            className="absolute top-4 right-4 text-black hover:text-amber-400"
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
                        <nav className="flex flex-col items-center justify-center h-full text-2xl  bg-slate-100">
                            <Link to='/'>
                                <a className="text-slate-800 hover:text-amber-400 hover:underline" onClick={closeMenu}>Home</a>
                            </Link>

                            <Link to='/services'>
                                <a className="text-slate-800 hover:text-amber-400 hover:underline" onClick={closeMenu}>Skills</a>
                            </Link>

                            <Link to='/projects'>
                                <a className="text-slate-800 hover:text-amber-400 hover:underline" onClick={closeMenu}>Projects</a>
                            </Link>

                            <Link to='/sobre'>
                                <button 
                                    className="text-black bg-amber-400 rounded-3xl px-5 py-2 items-center 
                                    justify-center hover:bg-amber-500 hover:underline" onClick={closeMenu}
                                >
                                    Fale Comigo!
                                </button>
                            </Link>

                            <div className='flex items-center justify-center gap-4'>
                                <a 
                                    className='hover:scale-125 hover:transition-all' 
                                    href="https://api.whatsapp.com/send?phone=5517988334070&text=Olá, Kelvin gostaria de "
                                    target='_blank'
                                    >
                                        <FaWhatsapp class='FaWhatsapp' size={35} style={{color: '#25d366'}}/>
                                </a>                

                                <a 
                                    className='hover:scale-125 hover:transition-all' 
                                    href="https://https://www.instagram.com/"
                                    target='_blank'
                                    >
                                        <FaLinkedinIn class='FaWhatsapp' size={35} style={{color: '#087BB9'}}/>
                                </a>

                                <a 
                                    className='hover:scale-125 hover:transition-all' 
                                    href="https://https://www.instagram.com/"
                                    target='_blank'
                                    >
                                        <FaGithub class='FaWhatsapp' size={35} style={{color: '#080808'}}/>
                                </a>
                            </div>
                        </nav>
                    </div>
                )}

                <nav className="items-center justify-center h-full space-x-10 hidden md:block sm:mt-16 text-2xl mt-6">
                    <Link to='/'>
                        <a className="text-black hover:text-amber-400">Home</a>
                    </Link>

                    <Link to='/sobre'>
                        <a className="text-black hover:text-amber-400">Skills</a>
                    </Link>

                    <Link to='/sobre'>
                        <a className="text-black hover:text-amber-400">Projects</a>
                    </Link>

                    <Link to='/sobre'>
                        <button className="text-black bg-amber-400 rounded-3xl px-5 py-2 items-center justify-center hover:bg-amber-500">
                            Fale Comigo!
                        </button>
                    </Link>
                    <div className='flex items-center justify-center gap-4'>
                                <a 
                                    className='hover:scale-125 hover:transition-all' 
                                    href="https://api.whatsapp.com/send?phone=5517988334070&text=Olá, Kelvin gostaria de "
                                    target='_blank'
                                    >
                                        <FaWhatsapp class='FaWhatsapp' size={35} style={{color: '#25d366'}}/>
                                </a>                

                                <a 
                                    className='hover:scale-125 hover:transition-all' 
                                    href="https://https://www.instagram.com/"
                                    target='_blank'
                                    >
                                        <FaLinkedinIn class='FaWhatsapp' size={35} style={{color: '#087BB9'}}/>
                                </a>

                                <a 
                                    className='hover:scale-125 hover:transition-all' 
                                    href="https://https://www.instagram.com/"
                                    target='_blank'
                                    >
                                        <FaGithub class='FaWhatsapp' size={35} style={{color: '#080808'}}/>
                                </a>
                            </div>                    
                </nav>
            </div>

        </header>
    )
}