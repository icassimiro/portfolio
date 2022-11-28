import Github from "./Github";
import login from "./images/login.png";
import poke from "./images/poke.png";
const Projects = () => {
  return (
    <section className="project-container">
      <div className="project">
        <h1 className="title-text">PROJETOS</h1>
        <div className="allprojects">
          <a
            href="https://github.com/icassimiro/Tela-de-login"
            target="_blank"
            className="all-title"
          >
            PROJETO TELA DE LOGIN PARA SITES E APLICATIVOS.
          </a>
          <img className="background" src={login} />
        </div>
        <div className="allprojects1">
          <a
            href="https://github.com/icassimiro/poke-search"
            target="_blank"
            className="all-title"
          >
            PROJETO POKEDEX UTILIZANDO POKEAPI.
          </a>
          <img className="poke" src={poke} alt="poke" />
        </div>
        <div className="allprojects2">
          <h4 className="all-titlegit">
            VEJA MEUS PROJETOS CLICANDO NO ICONE GITHUB.
          </h4>
          <Github />
        </div>
      </div>
    </section>
  );
};
export default Projects;
