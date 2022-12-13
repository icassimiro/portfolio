import iago from "./images/iago.png";
const Me = () => {
  return (
    <div className="profall">
      <div className="divp">
        <div className="align">
          <p className="hello">Olá.</p>
          <p className="ptext">
            Meu Nome é Iago, e sou Desenvolvedor Web Front-End. Iniciei meus
            estudos e aplicações em Junho de 2022. Estou em busca da primeira
            oportunidade como desenvolvedor. Estimo para desenvolver um código
            otimizado bem como um visual proporcionado.{" "}
          </p>
        </div>
      </div>
      <img className="img" src={iago} alt="iago"></img>
    </div>
  );
};

export default Me;
