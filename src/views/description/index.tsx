import { useLanguage } from '../../provider/LanguageProvider'




export function Description(){

  const{languageMode} = useLanguage();

    return(
        <div className='sm:flex sm:mt-0 max-w-8xl  mt-10 items-center justify-center md:px-32 px-14 z-50' >

           
        

          <p className='px-12 text-xl text-center mt-3'>
            {languageMode ? <strong>Hi, my name is Jhon! 👋</strong> : <strong>Olá, meu nome é Jhon! 👋</strong>}
            <br />
            <br />
            {languageMode ? 
              <>
              <strong>Full-Stack</strong> Developer,graduated in <strong>Information Systems</strong> from UEMG, with 
              specialization in <strong>Cloud Computing and Mobile Applications</strong>. My passion is to transform challenges 
              into efficient solutions, creating scalable and high-performance applications. 
              <br />
              With a focus on 
              <strong>React.js, TypeScript and Node.js</strong>, I develop modern interfaces and robust systems to 
              positively impact businesses and users. I am always looking for improvement and new challenges!
              </> 

            : 
              <>
              Desenvolvedor <strong>Full-Stack</strong>, 
              formado em <strong>Sistemas de Informação</strong> pela UEMG, com 
              especialização em <strong>Cloud Computing e Aplicativos Móveis</strong>. 
              Minha paixão é transformar desafios em soluções eficientes, criando aplicações escaláveis e de alto desempenho.
              <br />
              Com foco em <strong>React.js, TypeScript e Node.js</strong>, desenvolvo interfaces modernas e sistemas robustos para impactar 
              positivamente negócios e usuários. Estou sempre em busca de aprimoramento e novos desafios!
              </>

            }
          </p>
          
      </div>
  );
}
