import React, { useEffect } from 'react';
import { IoIosPaperPlane } from 'react-icons/io';
import imgEu from '../../assets/imgDescriptionLight.png';
import { useLanguage } from '../../provider/LanguageProvider';

export function Description() {
  const { languageMode } = useLanguage();

  useEffect(() => {
    const plane = document.getElementById("plane");

    function isElementInViewport(el: Element | null) {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      if (isElementInViewport(plane)) {
        if (plane) {
          plane.classList.add("fly-animation");
          window.removeEventListener("scroll", handleScroll);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <div className='flex sm:mt-0 max-w-8xl  mt-10 items-center justify-center px-12'>
      
      <p className='px-12 text-xl sm:text-center text-left'>
        <div id="plane" className="animate-plane">
          <IoIosPaperPlane size={100} />
        </div>
        {languageMode ? <>Hi, my name is Jhon Dharkyson! 👋</> : <>Olá, meu nome é Jhon Dharkyson! 👋</>}
        <br />
        <br />
        {languageMode ?
          <>
            I am a <strong>Full-Stack developer</strong>,
            graduated in Information Systems from Minas Gerais State University.
            Additionally, I have a Post-Graduation in Cloud Computing Projects
            and Multiplatform Mobile Applications Projects from UNIAMERICA.
          </> :

          <>
            Sou um <strong>desenvolvedor Full-Stack</strong>,
            formado em Sistemas de Informação pela UEMG - Universidade do Estado de Minas Gerais.
            Além disso, tenho uma Pós-Graduação em Projetos de Cloud Computing e Projetos de Aplicativos Móveis
            Multiplataforma pela UNIAMERICA.
          </>
        }
      </p>
      <img
        src={imgEu}
        alt="Logo"
        className='sm:w-1/3  sm:rounded-full mb-0 sm:mt-14 mt-12 rounded-full '
      />
    </div>
  );
}
