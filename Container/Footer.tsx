import * as React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="app-footer">
        <div className="logo">
          <h2>IFLab</h2>
          <p>You can stop scrolling now.</p>
        </div>
        <div className="right">
          <ul>
            <h3>EMPRESA</h3>

            <li>
              <a href="#">Desenvolvedores</a>
            </li>

            <li>
              <a href="#">Integrações</a>
            </li>

            <li>
              <a href="#">Investidores</a>
            </li>

            <li>
              <a href="#">Fornecedores</a>
            </li>
          </ul>
          <ul>
            <h3>IMPORTANTE</h3>

            <li>
              <a href="#">Cookies</a>
            </li>

            <li>
              <a href="#">Politica de Privacidade</a>
            </li>

            <li>
              <a href="#">Suporte</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="market">
        <p>Todos os Direitos reservados</p>

        <div className="market-info">
          <a href="#">
            <img
              src="https://github.com/Luan16p/Frameworks-img-database/blob/main/instagram%20(1).png?raw=true"
              alt=""
            />
          </a>

          <a href="#">
            <img
              src="https://github.com/Luan16p/Frameworks-img-database/blob/main/github.png?raw=true"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
