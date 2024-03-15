import { BiLogoGmail } from 'react-icons/bi'
import logoS from '../../assets/imgDescriptionLight.png'
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { useTheme } from '../../provider/ThemeProvider';
import { useLanguage } from '../../provider/LanguageProvider';


export function Footer(){
    
    const { themeMode } = useTheme();
    const { languageMode } = useLanguage();
    
    return(
        <footer className={`${themeMode ? 'bg-theme-dark-footer' : 'bg-theme-light-footer' } flex flex-col items-center justify-center mt-10 text-white h-72`}>
            <h1 className='text-center text-xl mb-4 mt-4'>{languageMode ? <>Talk to me on my social media!</> : <>Fale comigo em minhas redes sociais!</>}</h1>
            <div className='flex items-center justify-center gap-4'>
                <a 
                    className='hover:scale-125 hover:transition-all' 
                    href="https://api.whatsapp.com/send?phone=5534998277081&text=Olá, Jhon "
                    target='_blank'
                    >
                        <FaWhatsapp class='FaWhatsapp' size={35} style={{color: '#25d366'}}/>
                </a>                

                <a 
                    className='hover:scale-125 hover:transition-all' 
                    href="https://www.linkedin.com/in/jhon-mendon%C3%A7a-203925163/"
                    target='_blank'
                    >
                        <FaLinkedinIn class='FaLinkedinIn' size={35} style={{color: '#087BB9'}}/>
                </a>

                <a 
                    className='hover:scale-125 hover:transition-all' 
                    href="https://github.com/jhondharkyson520"
                    target='_blank'
                    >
                        <FaGithub class='FaGitHub' size={35} style={{color: '#080808'}}/>
                </a>

                <a 
                    className='hover:scale-125 hover:transition-all' 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=jhondharkyson@gmail.com"
                    target='_blank'
                    >
                        <BiLogoGmail class='FaGitHub' size={35} style={{color: '#EA4335'}}/>
                </a>
            </div>
            <img
                        src={logoS}
                        alt="Logo"
                        className='sm:w-1/12 w-1/5 sm:rounded-full mb-6 sm:mt-10 sm:mb10 mt-6 rounded-full '

                        
            />
            <h1 className='sm:text-lg text-sm mb-5'>Copyright | Jhon Dharkyson - 
            {languageMode ? <> All rights reserved</> : <> Todos os direitos reservados</>}</h1>
        </footer>
    )
}