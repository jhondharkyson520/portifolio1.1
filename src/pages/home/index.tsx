import { Link } from 'react-router-dom';
import logo from '../../assets/logoheader.png'
import barber from '../../assets/projects/barber.png'
import WhatsAppButton from '../../components/ButtonWhatsApp';
import IconGallery from '../../components/IconsGalerryHome';
import {AiFillEye, AiFillGithub} from 'react-icons/ai'



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
            <IconGallery/>
          </div>

          <div className='flex-col sm:mt-10 w-full mt-10 items-center text-center justify-center'>
            <p className='text-xl'>
            🌟 Aqui estão alguns dos meus projetos:
            </p>
            <div
                className='relative mt-7 sm:flex sm:flex-row flex flex-col px-4 gap-5 
                items-center justify-center rounded-lg'
            >
              <div
                className='relative flex flex-col justify-center bg-white border-slate-700 border-2 w-full h-auto rounded-ee-3xl hover:transition-all hover:scale-110 rounded-ss-3xl shadow-lg'
                style={{ backgroundColor: '#252525' }}
              >
                <h1 className='py-3 text-center font-bold text-xl text-white cursor-default'>
                  Barbearia
                </h1>
                <div className='flex items-center justify-center'>
                  <Link
                    to="https://projeto-barberdev-glij.vercel.app/"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillEye size={25} color='#3FBAC2' />
                    <p className='text-center font-medium text-lg text-white cursor-pointer'>
                      Visualizar
                    </p>
                  </Link>
                  <Link
                    to="https://github.com/jhondharkyson520/projeto-barberdev"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillGithub size={25} color='#3FBAC2' />
                    <p className='text-center font-medium text-lg text-white cursor-pointer'>
                      GitHub
                    </p>
                  </Link>
                </div>
                <iframe
                  src="https://projeto-barberdev-glij.vercel.app/"
                  title="Pré-visualização do site"
                  style={{
                    width: '100%',
                    height: '300px', // Ajuste a altura conforme necessário
                    border: 'none',
                  }}
                ></iframe>
              </div>

              <div
                  className='relative flex flex-col justify-center bg-white border-slate-700 border-2 w-full h-auto rounded-ee-3xl hover:transition-all hover:scale-110 rounded-ss-3xl shadow-lg'
                  style={{ backgroundColor: '#252525' }}
                >
                  <h1 className='py-3 text-center font-bold text-xl text-white cursor-default'>
                    Borracharia
                  </h1>
                  <div className='flex items-center justify-center'>
                    <Link
                      to="https://kppneus.vercel.app/"
                      target='_blank'
                      className='hover:transition-all hover:scale-110 flex items-center px-5'
                    >
                      <AiFillEye size={25} color='#3FBAC2' />
                      <p className='text-center font-medium text-lg text-white cursor-pointer'>
                        Visualizar
                      </p>
                    </Link>
                    <Link
                      to="https://github.com/jhondharkyson520/kppneus"
                      target='_blank'
                      className='hover:transition-all hover:scale-110 flex items-center px-5'
                    >
                      <AiFillGithub size={25} color='#3FBAC2' />
                      <p className='text-center font-medium text-lg text-white cursor-pointer'>
                        GitHub
                      </p>
                    </Link>
                  </div>
                  <iframe
                    src="https://kppneus.vercel.app/"
                    title="Pré-visualização do site"
                    style={{
                      width: '100%',
                      height: '300px',
                      border: 'none',
                    }}
                  ></iframe>
              </div>

              <div
                className='relative flex flex-col justify-center bg-white border-slate-700 border-2 w-full h-auto rounded-ee-3xl hover:transition-all hover:scale-110 rounded-ss-3xl shadow-lg'
                style={{ backgroundColor: '#252525' }}
              >
                <h1 className='py-3 text-center font-bold text-xl text-white cursor-default'>
                  Sorveteria
                </h1>
                <div className='flex items-center justify-center'>
                  <Link
                    to="https://sorveteria-three.vercel.app/"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillEye size={25} color='#3FBAC2' />
                    <p className='text-center font-medium text-lg text-white cursor-pointer'>
                      Visualizar
                    </p>
                  </Link>
                  <Link
                    to="https://github.com/jhondharkyson520/sorveteria"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillGithub size={25} color='#3FBAC2' />
                    <p className='text-center font-medium text-lg text-white cursor-pointer'>
                      GitHub
                    </p>
                  </Link>
                </div>
                <iframe
                  src="https://sorveteria-three.vercel.app/"
                  title="Pré-visualização do site"
                  style={{
                    width: '100%',
                    height: '300px', // Ajuste a altura conforme necessário
                    border: 'none',
                    
                  }}                 
                ></iframe>
              </div>

              <div
                className='relative flex flex-col justify-center bg-white border-slate-700 border-2 w-full h-auto rounded-ee-3xl hover:transition-all hover:scale-110 rounded-ss-3xl shadow-lg'
                style={{ backgroundColor: '#252525' }}
              >
                <h1 className='py-3 text-center font-bold text-xl text-white cursor-default'>
                  Criptomoedas
                </h1>
                <div className='flex items-center justify-center'>
                  <Link
                    to="https://cripto-umber.vercel.app/"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillEye size={25} color='#3FBAC2' />
                    <p className='text-center font-medium text-lg text-white cursor-pointer'>
                      Visualizar
                    </p>
                  </Link>
                  <Link
                    to="https://github.com/jhondharkyson520/cripto"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillGithub size={25} color='#3FBAC2' />
                    <p className='text-center font-medium text-lg text-white cursor-pointer'>
                      GitHub
                    </p>
                  </Link>
                </div>
                <iframe
                  src="https://cripto-umber.vercel.app/"
                  title="Pré-visualização do site"
                  style={{
                    width: '100%',
                    height: '300px', 
                    border: 'none',
                  }}
                ></iframe>
              </div>

              </div>  
            </div>                     
          <WhatsAppButton/>      
        </div>
    )
}