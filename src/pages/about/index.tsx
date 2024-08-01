import React, { useRef } from 'react';
import { useLanguage } from "../../provider/LanguageProvider";





export function About() {
  const { languageMode } = useLanguage();

  return (
    <div className='flex items-center justify-center'>
      <div className='flex-col sm:mt-10 max-w-4xl mt-10 items-center text-center justify-center' id='about'>
      <p className='text-xl'>
        {languageMode ? <>📚 Bachelor's Thesis 🎓</> : <>📚 Tese de Conclusão de Curso (TCC) 🎓</>}
      </p>
      <p className='text-lg mt-5'>
        {languageMode ? 
        <>
            As part of my academic and professional journey, I had the opportunity to conduct 
            significant research as part of my Information Systems course at UEMG. My bachelor's 
            thesis reflects my commitment to academic excellence and my interest in specific areas 
            of information technology.
        </> 
        : 
        <>
            Como parte da minha jornada acadêmica e profissional, tive a oportunidade de realizar 
            uma pesquisa significativa como parte do meu curso de Sistemas de Informação na UEMG. 
            Minha tese de TCC reflete meu compromisso com a excelência acadêmica e meu interesse 
            em áreas específicas da tecnologia da informação.
        </>}
      </p>
    
      <p className='text-xl mt-5'>
        {languageMode ? <>🔗 Access to Thesis:</> : <>🔗 Acesso à Tese: </>}
      </p>
      <p className='text-xl mt-5'>
        {languageMode ? <>📖 To read the full thesis,<a target='_blank' href='https://drive.google.com/file/d/12YMQ-Hquc01EGwfHT3qZi5eTe8kF-RZC/view?usp=sharing'> click here.</a></> : <>📖 Para ler a tese completa, <a target='_blank' href='https://drive.google.com/file/d/12YMQ-Hquc01EGwfHT3qZi5eTe8kF-RZC/view?usp=sharing'>clique aqui.</a></>}
      </p>

    </div>
    </div>
  );
}
