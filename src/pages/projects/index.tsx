import { Link } from "react-router-dom";
import ScrollToTopButton from "../../components/ButtonScrollToTop";
import WhatsAppButton from "../../components/ButtonWhatsApp";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const projects = [
  {
    title: "Landing Page de Borracharia",
    description: "Desenvolvi uma plataforma online para minha borracharia, usando ReactJS, TypeScript e aplicando o estilo com Tailwind CSS. Criei uma interface moderna, responsiva e intuitiva que oferece aos visitantes uma experiência envolvente. Além disso, integrei uma API externa para otimizar a comunicação com fornecedores de pneus e peças automotivas, garantindo que o estoque da borracharia esteja sempre atualizado. Este projeto representa uma combinação equilibrada de design e desenvolvimento web e é um destaque no meu portfólio.",
    previewLink: "https://kppneus.vercel.app/",
    githubLink: "https://github.com/jhondharkyson520/kppneus",
  },
  {
    title: "Landing Page de Barbearia",
    description: "Esta landing page foi desenvolvida para uma barbearia moderna, usando HTML, CSS3 e SASS. Apresentando um design elegante e responsivo, a página é repleta de efeitos de animações que criam uma experiência envolvente para os visitantes. Ela fornece informações cruciais, como serviços oferecidos, contato e localização da barbearia. Este projeto demonstra uma combinação equilibrada de design e desenvolvimento web, tornando-o um destaque em meu portfólio.",
    previewLink: "https://projeto-barberdev-glij.vercel.app/",
    githubLink: "https://github.com/jhondharkyson520/projeto-barberdev",
  },
  {
    title: "Criptomoedas",
    description: "Desenvolvi uma página de lista de criptomoedas impressionante usando ReactJS e consumindo uma API externa de criptomoedas. Essa aplicação oferece uma experiência informativa e envolvente para os investidores de criptomoedas. Os preços e dados em tempo real de várias criptomoedas são apresentados de forma clara e acessível. Além disso, a aplicação permite a personalização da lista para acompanhar as criptomoedas de maior interesse. Este projeto demonstra meu compromisso com o design atraente e a entrega de informações valiosas aos investidores de criptomoedas, sendo um destaque no meu portfólio.",
    previewLink: "https://cripto-umber.vercel.app/",
    githubLink: "https://github.com/jhondharkyson520/cripto",
  },  
  {
    title: "Landing Page de Sorveteria",
    description: "Para minha sorveteria, desenvolvi uma aplicação web usando ReactJS e TypeScript, aplicando estilos personalizados com CSS3 para criar uma experiência visualmente atraente. A página é responsiva, proporcionando uma experiência agradável em qualquer dispositivo. Além disso, consumi a mesma API externa usada na borracharia para manter o estoque de sabores de sorvete sempre atualizado e oferecer informações sobre promoções exclusivas. Este projeto é um exemplo de como a tecnologia moderna pode melhorar a interação do cliente e a eficiência operacional, e é um destaque no meu portfólio.",
    previewLink: "https://sorveteria-three.vercel.app/",
    githubLink: "https://github.com/jhondharkyson520/sorveteria",
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
