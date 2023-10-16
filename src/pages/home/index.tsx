import { Link } from 'react-router-dom';
import logo from '../../assets/logoheader.png';
import barber from '../../assets/projects/barber.png';
import WhatsAppButton from '../../components/ButtonWhatsApp';
import IconGallery from '../../components/IconsGalerryHome';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export function Home() {
  const iframeStyle = {
    width: '600px',
    height: '400px', 
    border: 'none',
    overflow: 'hidden', 
  };

  return (
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
        <IconGallery />
      </div>

      <div 
        className='flex-col sm:mt-10 w-full mt-10 items-center text-center justify-center'
      >
        <p 
          className='text-xl'
        >
          🌟 Aqui estão alguns dos meus projetos:
        </p>        
        <div 
          className='relative mt-7 sm:flex sm:flex-row flex flex-col px-4 
          gap-5 items-center justify-center rounded-lg'
        >
          
          <div 
            className='relative mt-7 sm:flex sm:flex-col flex flex-col px-4 gap-8 
            items-center justify-center rounded-2xl'
          >
            <div className='relative flex items-center justify-center gap-0'>
              <div
                className='relative flex flex-col justify-center bg-white border-slate-700  h-auto 
                rounded-2xl shadow-2xl'
                style={{ backgroundColor: '#252525' }}
              >               
                
                <iframe
                  src="https://projeto-barberdev-glij.vercel.app/"
                  title="Pré-visualização do site"
                  style={iframeStyle}
                  scrolling="no"
                ></iframe>
              </div>          
              <div className='sm:flex sm:text-center sm:flex-col sm:ml-7 bg-white sm:p-16 md:p-5 rounded-2xl'>
                <span>
                <p className='font-bold'>
                  Título do Projeto: Landing Page de Barbearia
                </p>                
                <p className='font-medium'>Descrição:</p>                
                <p>
                  Esta landing page foi desenvolvida para uma barbearia moderna, usando HTML, CSS3 e SASS. 
                  Apresentando um design elegante e responsivo, a página é repleta de efeitos de animações 
                  que criam uma experiência envolvente para os visitantes. Ela fornece informações cruciais, 
                  como serviços oferecidos, contato e localização da barbearia. 
                  Este projeto demonstra uma combinação equilibrada de design e desenvolvimento web, tornando-o um 
                  destaque em meu portfólio.
                </p>
                </span>
                <div
                className='relative flex flex-col justify-center bg-white h-auto 
                mt-4 mb-6'
                >                
                <div className='flex items-center justify-center'>
                  <Link
                    to="https://projeto-barberdev-glij.vercel.app/"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillEye size={25} color='#000' />
                    <p className='ml-2 text-center font-medium text-lg cursor-pointer'>
                      Visualizar
                    </p>
                  </Link>
                  <Link
                    to="https://github.com/jhondharkyson520/projeto-barberdev"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillGithub size={25} color='#000' />
                    <p className='ml-2 text-center font-medium text-lg cursor-pointer'>
                      GitHub
                    </p>
                  </Link>
                </div>
                </div>
              </div>
            </div>

            <div 
            className='relative mt-7 sm:flex sm:flex-col flex flex-col px-4 gap-8 
            items-center justify-center rounded-2xl'
            >
            <div className='relative flex items-center justify-center gap-0'>
              <div
                className='relative flex flex-col justify-center bg-white border-slate-700  h-auto 
                rounded-2xl shadow-2xl'
                style={{ backgroundColor: '#252525' }}
              >               
                
                <iframe
                  src="https://kppneus.vercel.app/"
                  title="Pré-visualização do site"
                  style={iframeStyle}
                  scrolling="no"
                ></iframe>
              </div>          
              <div className='sm:flex sm:text-center sm:flex-col sm:ml-7 bg-white sm:p-16 md:p-5 rounded-2xl'>
                <span>
                <p className='font-bold'>
                  Título do Projeto: Landing Page de Borracharia
                </p>                
                <p className='font-medium'>Descrição:</p>                
                <p>
                  Esta landing page foi desenvolvida para uma barbearia moderna, usando HTML, CSS3 e SASS. 
                  Apresentando um design elegante e responsivo, a página é repleta de efeitos de animações 
                  que criam uma experiência envolvente para os visitantes. Ela fornece informações cruciais, 
                  como serviços oferecidos, contato e localização da barbearia. 
                  Este projeto demonstra uma combinação equilibrada de design e desenvolvimento web, tornando-o um 
                  destaque em meu portfólio.
                </p>
                </span>
                <div
                className='relative flex flex-col justify-center bg-white h-auto 
                mt-4 mb-6'
                >                
                <div className='flex items-center justify-center'>
                  <Link
                    to="https://kppneus.vercel.app/"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillEye size={25} color='#000' />
                    <p className='ml-2 text-center font-medium text-lg cursor-pointer'>
                      Visualizar
                    </p>
                  </Link>
                  <Link
                    to="https://github.com/jhondharkyson520/kppneus"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillGithub size={25} color='#000' />
                    <p className='ml-2 text-center font-medium text-lg cursor-pointer'>
                      GitHub
                    </p>
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className='relative mt-7 sm:flex sm:flex-col flex flex-col px-4 gap-8 
            items-center justify-center rounded-2xl'
            >
            <div className='relative flex items-center justify-center gap-0'>
              <div
                className='relative flex flex-col justify-center bg-white border-slate-700  h-auto 
                rounded-2xl shadow-2xl'
                style={{ backgroundColor: '#252525' }}
              >               
                
                <iframe
                  src="https://sorveteria-three.vercel.app/"
                  title="Pré-visualização do site"
                  style={iframeStyle}
                  scrolling="no"
                ></iframe>
              </div>          
              <div className='sm:flex sm:text-center sm:flex-col sm:ml-7 bg-white sm:p-16 md:p-5 rounded-2xl'>
                <span>
                <p className='font-bold'>
                  Título do Projeto: Landing Page de Sorveteria
                </p>                
                <p className='font-medium'>Descrição:</p>                
                <p>
                  Esta landing page foi desenvolvida para uma barbearia moderna, usando HTML, CSS3 e SASS. 
                  Apresentando um design elegante e responsivo, a página é repleta de efeitos de animações 
                  que criam uma experiência envolvente para os visitantes. Ela fornece informações cruciais, 
                  como serviços oferecidos, contato e localização da barbearia. 
                  Este projeto demonstra uma combinação equilibrada de design e desenvolvimento web, tornando-o um 
                  destaque em meu portfólio.
                </p>
                </span>
                <div
                className='relative flex flex-col justify-center bg-white h-auto 
                mt-4 mb-6'
                >                
                <div className='flex items-center justify-center'>
                  <Link
                    to="https://sorveteria-three.vercel.app/"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillEye size={25} color='#000' />
                    <p className='ml-2 text-center font-medium text-lg cursor-pointer'>
                      Visualizar
                    </p>
                  </Link>
                  <Link
                    to="https://github.com/jhondharkyson520/sorveteria"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillGithub size={25} color='#000' />
                    <p className='ml-2 text-center font-medium text-lg cursor-pointer'>
                      GitHub
                    </p>
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div 
            className='relative mt-7 sm:flex sm:flex-col flex flex-col px-4 gap-8 
            items-center justify-center rounded-2xl'
            >
            <div className='relative flex items-center justify-center gap-0'>
              <div
                className='relative flex flex-col justify-center bg-white border-slate-700  h-auto 
                rounded-2xl shadow-2xl'
                style={{ backgroundColor: '#252525' }}
              >               
                
                <iframe
                  src="https://cripto-umber.vercel.app/"
                  title="Pré-visualização do site"
                  style={iframeStyle}
                  scrolling="no"
                ></iframe>
              </div>          
              <div className='sm:flex sm:text-center sm:flex-col sm:ml-7 bg-white sm:p-16 md:p-5 rounded-2xl'>
                <span>
                <p className='font-bold'>
                  Título do Projeto: Criptomoedas
                </p>                
                <p className='font-medium'>Descrição:</p>                
                <p>
                  Esta landing page foi desenvolvida para uma barbearia moderna, usando HTML, CSS3 e SASS. 
                  Apresentando um design elegante e responsivo, a página é repleta de efeitos de animações 
                  que criam uma experiência envolvente para os visitantes. Ela fornece informações cruciais, 
                  como serviços oferecidos, contato e localização da barbearia. 
                  Este projeto demonstra uma combinação equilibrada de design e desenvolvimento web, tornando-o um 
                  destaque em meu portfólio.
                </p>
                </span>
                <div
                className='relative flex flex-col justify-center bg-white h-auto 
                mt-4 mb-6'
                >                
                <div className='flex items-center justify-center'>
                  <Link
                    to="https://cripto-umber.vercel.app/"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillEye size={25} color='#000' />
                    <p className='ml-2 text-center font-medium text-lg cursor-pointer'>
                      Visualizar
                    </p>
                  </Link>
                  <Link
                    to="https://github.com/jhondharkyson520/cripto"
                    target='_blank'
                    className='hover:transition-all hover:scale-110 flex items-center px-5'
                  >
                    <AiFillGithub size={25} color='#000' />
                    <p className='ml-2 text-center font-medium text-lg cursor-pointer'>
                      GitHub
                    </p>
                  </Link>
                </div>
                </div>
              </div>
            </div>
            </div>
            </div> 
          <WhatsAppButton />
        </div>
      </div>
      
    </div>
  );
}
