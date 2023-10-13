import logo from '../../assets/logoheader.png'
import barber from '../../assets/projects/barber.png'
import WhatsAppButton from '../../components/ButtonWhatsApp';
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoHtml5, BiLogoReact, BiLogoCss3, BiLogoGit, BiLogoNodejs } from 'react-icons/bi'



export function Home(){ 
    

    return(
        <div className='w-full flex-col mx-auto px-4 mt-10 mb-10 sm:mt-20'>        
          <div className='sm:flex sm:mt-0 max-w-7xl  mt-10 items-center justify-center px-12'>
            <p className='px-12 text-xl'>
              Olá, meu nome é Jhon Dharkyson! 👋
              <br />
              <br />
              Sou um <strong>desenvolvedor Front-End</strong> apaixonado, 
              formado em Sistemas de Informação pela UEMG - Universidade do Estado de Minas Gerais. 
              Além disso, tenho uma Pós-Graduação em Projetos de Cloud Computing e Projetos de Aplicativos Móveis 
              Multiplataforma pela UNIAMERICA. 
            </p>
            <img
                        src={logo}
                        alt="Logo"
                        className='sm:w-1/3  sm:rounded-full mb-0 sm:mt-14 mt-12 rounded-full '
                        
            />
          </div>

          <div className='flex-col sm:mt-10 w-full mt-10 items-center text-center justify-center'>
            <p className='text-xl'>
              🚀 Minhas principais habilidades são:
            </p>
            <div className='flex items-center justify-center mt-8'>
              <BiLogoHtml5 size={90} color='#DE4B25'/>
              <BiLogoCss3 size={90} color='#0974BC'/>
              <BiLogoTypescript size={90} color='#377CC8'/>
              <BiLogoReact size={90} color='#66DBFB'/>
              <BiLogoTailwindCss size={90} color='#3EBFF8'/>
              <BiLogoGit size={90} color='#F05639'/>
              <BiLogoNodejs size={90} color='#5FAE4B'/>
            </div>
          </div>

          <div className='flex-col sm:mt-10 w-full mt-10 items-center text-center justify-center'>
            <p className='text-xl'>
            🌟 Aqui estão alguns dos meus projetos:
            </p>
            <div className='flex items-center justify-center mt-8 gap-5'>
              <div className='flex'>
                <h1>Barbearia</h1>
                <img
                        src={barber}
                        alt="Logo"
                        className='sm:w-1/3  sm:rounded-2xl mb-0 sm:mt-14 mt-12 rounded-2xl '
                        
                />
              </div>

              <div>
                Sorveteria
              </div>

              <div>
                Borracharia
              </div>

              <div>
                Criptomoedas
              </div>
            </div>
          </div>                    
          <WhatsAppButton/>      
        </div>
    )
}