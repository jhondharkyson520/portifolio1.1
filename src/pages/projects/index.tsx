import { Link } from "react-router-dom";
import ScrollToTopButton from "../../components/ButtonScrollToTop";
import WhatsAppButton from "../../components/ButtonWhatsApp";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const projects = [
  {
    title: "Landing Page de Barbearia",
    description: "Esta landing page foi desenvolvida para uma barbearia moderna, usando HTML, CSS3 e SASS. Apresentando um design elegante e responsivo, a página é repleta de efeitos de animações que criam uma experiência envolvente para os visitantes. Ela fornece informações cruciais, como serviços oferecidos, contato e localização da barbearia. Este projeto demonstra uma combinação equilibrada de design e desenvolvimento web, tornando-o um destaque em meu portfólio.",
    previewLink: "https://projeto-barberdev-glij.vercel.app/",
    githubLink: "https://github.com/jhondharkyson520/projeto-barberdev",
  },
  {
    title: "Landing Page de Borracharia",
    description: "Esta landing page foi desenvolvida para uma barbearia moderna, usando HTML, CSS3 e SASS. Apresentando um design elegante e responsivo, a página é repleta de efeitos de animações que criam uma experiência envolvente para os visitantes. Ela fornece informações cruciais, como serviços oferecidos, contato e localização da barbearia. Este projeto demonstra uma combinação equilibrada de design e desenvolvimento web, tornando-o um destaque em meu portfólio.",
    previewLink: "https://kppneus.vercel.app/",
    githubLink: "https://github.com/jhondharkyson520/kppneus",
  },
  {
    title: "Landing Page de Sorveteria",
    description: "Esta landing page foi desenvolvida para uma barbearia moderna, usando HTML, CSS3 e SASS. Apresentando um design elegante e responsivo, a página é repleta de efeitos de animações que criam uma experiência envolvente para os visitantes. Ela fornece informações cruciais, como serviços oferecidos, contato e localização da barbearia. Este projeto demonstra uma combinação equilibrada de design e desenvolvimento web, tornando-o um destaque em meu portfólio.",
    previewLink: "https://sorveteria-three.vercel.app/",
    githubLink: "https://github.com/jhondharkyson520/sorveteria",
  },
  {
    title: "Criptomoedas",
    description: "Esta landing page foi desenvolvida para uma barbearia moderna, usando HTML, CSS3 e SASS. Apresentando um design elegante e responsivo, a página é repleta de efeitos de animações que criam uma experiência envolvente para os visitantes. Ela fornece informações cruciais, como serviços oferecidos, contato e localização da barbearia. Este projeto demonstra uma combinação equilibrada de design e desenvolvimento web, tornando-o um destaque em meu portfólio.",
    previewLink: "https://cripto-umber.vercel.app/",
    githubLink: "https://github.com/jhondharkyson520/cripto",
  },
];

const iframeStyle = {
  width: '600px',
  height: '400px',
  border: 'none',
  overflow: 'hidden',
};

export function Projects() {
  return (
    <div className="w-full mt-16 items-center text-center justify-center" id="projects">
      <p className="text-xl">🌟 Aqui estão alguns dos meus projetos:</p>
      <div className="grid grid-cols-1 mt-10 sm:flex sm:flex-wrap justify-center items-center gap-8">
        {projects.map((project, index) => (
          <div key={index} className="w-full p-8">
            <div className="sm:flex grid grid-cols-1 gap-8">
              <div className="relative justify-center bg-white border-slate-700 rounded-2xl shadow-2xl" >
                <iframe 
                src={project.previewLink} 
                title="Pré-visualização do site" 
                className="rounded-2xl sm:max-w-xl w-full h-96" scrolling="no"></iframe>
              </div>
              <div className="flex flex-col  bg-white items-center justify-center p-5 rounded-2xl mt-4 sm:w-3/4 w-full">
                <span>
                  <p className="font-bold">Título do Projeto: {project.title}</p>
                  <p className="font-medium">Descrição:</p>
                  <p>{project.description}</p>
                </span>
                <div className="relative flex flex-col justify-center bg-white h-auto mt-4 mb-6">
                  <div className="flex items-center justify-center">
                    <Link to={project.previewLink} target="_blank" className="hover:transition-all hover:scale-110 flex items-center px-5">
                      <AiFillEye size={25} color="#000" />
                      <p className="ml-2 text-center font-medium text-lg cursor-pointer">Visualizar</p>
                    </Link>
                    <Link to={project.githubLink} target="_blank" className="hover:transition-all hover:scale-110 flex items-center px-5">
                      <AiFillGithub size={25} color="#000" />
                      <p className="ml-2 text-center font-medium text-lg cursor-pointer">GitHub</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}
