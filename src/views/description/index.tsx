import imgEu from '../../assets/imgDescriptionLight.png'
import { useLanguage } from '../../provider/LanguageProvider'
import imgLine01 from '../../assets/Lines/Line01.svg';
import imgIcon01 from '../../assets/Lines/Icon01.svg';




export function Description(){

  const{languageMode} = useLanguage();

    return(
        <div className='sm:flex sm:mt-0 max-w-8xl  mt-10 items-center justify-center md:px-32 px-14 z-50' >

           
        

          <p className='px-12 text-xl text-center mt-3'>
            {languageMode ? <>Hi, my name is Jhon! <i  className='text-3xl' > 👋</i></> : <>Olá, meu nome é Jhon! <i className='text-3xl'> 👋</i></>}
            <br />
            <br />
            {languageMode ? 
              <>
              I am a <strong>Full-Stack developer</strong>,
              with a degree in <strong>Information Systems</strong> from UEMG and a 
              specialization in Cloud Computing and Mobile Applications. 
              My main motivation is to apply my skills in practical, efficient 
              solutions in the job market, both in <strong>front-end</strong> and <strong>back-end</strong>. I'm 
              always seeking new challenges, eager to contribute and learn with 
              a dedicated team.
              </> 

            : 
              <>
              Sou um <strong>desenvolvedor Full-Stack</strong>, 
              formado em <strong>Sistemas de Informação</strong> pela UEMG, com 
              especialização em Cloud Computing e Aplicativos Móveis. 
              Minha maior motivação é aplicar meu conhecimento em soluções 
              práticas e eficientes no mercado de trabalho, tanto no <strong>front-end </strong>  
              quanto no <strong>back-end</strong>. Estou sempre em busca de novos desafios.
              </>
            }
          </p>
          <img
            src={imgEu}
            alt="Logo"
            className='sm:w-1/3  sm:rounded-full mb-0 sm:mt-14 mt-12 rounded-full '
            data-aos="zoom-in" data-aos-delay="380"
          />
      </div>
  );
}
