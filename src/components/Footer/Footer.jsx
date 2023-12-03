import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="column">
          <div className="logo-f">
            <img src={Logo} alt="Logo del Gym" />
          </div>
        </div>

        <div className="column">
          <ul>
            <li className="f-centro">NUESTRAS REDES</li>
            <li>
              <div className="social-links">
                <a href="https://github.com/AILexisIsla/rolling_gym/">
                  <img src={Github} alt="link para Github" />
                </a>

                <a href="https://www.instagram.com/">
                  <img src={Instagram} alt="link para Instagram" />
                </a>

                <a href="https://www.linkedin.com/">
                  <img src={Linkedin} alt="link para Linkedin" />
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="column">
          <ul>
            <li className="f-izq">¿NECESITAS AYUDA?</li>
            <div className="f-qf">
              <li>
                <a href="#">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="#">Terminos y condiciones</a>
              </li>
              <li>
                <a href="#">Trabaja con nosotros</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
