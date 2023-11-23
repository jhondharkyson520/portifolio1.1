import logo from '../../assets/logoheader.png'

export function Description(){
    return(
        <div className='sm:flex sm:mt-0 max-w-7xl  mt-10 items-center justify-center px-12'>
        <p className='px-12 text-xl sm:text-center text-left'>
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
    )
}