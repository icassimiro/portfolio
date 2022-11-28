import Github from "./Github";
import Instagram from "./Instagram";
import Linkedin from "./Linkedin";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const Links = () => {
  return (
    <section className="links-container">
      <div className="all-links">
        <div className="links">
          <AiFillPhone className="fills" id="phone-icon" />
          <h4>TELEFONE / WHATSAPP</h4>
          <h4>(31)997100742</h4>
        </div>
        <div className="links">
          <AiOutlineMail className="fills" id="email-icon" />
          <h4>E-MAIL</h4>
          <h4>ICASSIMIRO@HOTMAIL.COM</h4>
        </div>
        <div className="links">
          <AiFillEnvironment className="fills" id="pin-icon" />
          <h4>LOCALIZAÇÃO</h4>
          <h4>BELO HORIZONTE/MG</h4>
        </div>
        <div className="links">
          <Github />

          <h4>GITHUB</h4>
        </div>
        <div className="links">
          <Linkedin />
          <h4>LINKEDIN</h4>
        </div>
        <div className="links">
          <Instagram />
          <h4>INSTAGRAM</h4>
        </div>
      </div>
    </section>
  );
};

export default Links;
