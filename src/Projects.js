import Github from "./Github";
import login from "./images/login.png";
import poke from "./images/poke.png";
import landing from "./images/landing.png";
import ML from "./images/ML.png";
const Projects = () => {
  return (
    <section className="project-container">
      <div className="project">
        <h1 className="title-text">PROJETOS</h1>
        <div className="allprojects">
          <a
            href="https://github.com/icassimiro/LoginPS"
            target="_blank"
            className="all-title"
          >
            TELA DE LOGIN
          </a>
          <img className="background" src={login} />
        </div>
        <div className="allprojects1">
          <a
            href="https://github.com/icassimiro/LandingPage"
            target="_blank"
            className="all-title"
          >
            LANDING PAGE
          </a>

          <img className="landing" src={landing} alt="landingpage" />
        </div>
        <div className="allprojects3">
          <a
            href="https://github.com/icassimiro/pokedex"
            target="_blank"
            className="all-title"
          >
            POKÉDEX UTILIZANDO POKÉAPI
          </a>

          <img className="poke" src={poke} alt="poke" />
        </div>
        <div className="allprojects3">
          <a
            href="https://github.com/icassimiro/ecommerce"
            target="_blank"
            className="all-title"
          >
            ECOMMERCE UTILIZANDO API MERCADO LIVRE
          </a>

          <img className="poke" src={ML} alt="poke" />
        </div>
        <div className="allprojects2">
          <h4 className="all-titlegit">
            VEJA MEUS PROJETOS CLICANDO NO ÍCONE GITHUB
          </h4>
          <Github />
        </div>
      </div>
    </section>
  );
};
export default Projects;
