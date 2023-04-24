import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="lista-item">
            <ul className="lista">
              <li className="lista-item"><a href="#">Termos de Serviço</a></li>
              <li className="lista-item"><a href="#">Diretrizes da Comunidade</a></li>
              <li className="lista-item"><a href="#">Sobre</a></li>
              <li className="lista-item"><a href="#">Dúvidas</a></li>
            </ul>
            <div className="nome">
              Donare Corporation © 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
