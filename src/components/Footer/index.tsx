import logoS from '../../assets/logoheader.png'
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa'

export function Footer(){
    return(
        <footer className="flex flex-col items-center justify-center mt-10 text-white h-72" style={{backgroundColor: '#252525'}}>
            <h1 className='text-center text-xl mb-4 mt-4'>Fale conosco em nossas redes sociais!</h1>
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
                        <FaInstagram class='FaWhatsapp' size={35} style={{color: '#BE2E85'}}/>
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
            <img
                        src={logoS}
                        alt="Logo"
                        className='sm:w-1/12 w-1/5 sm:rounded-full mb-6 sm:mt-10 sm:mb10 mt-6 rounded-full '

                        
            />
            <h1 className='sm:text-lg text-sm mb-5'>Copyright | Jhon Dharkyson - Todos os direitos reservados</h1>
        </footer>
    )
}