import * as React from 'react';

import { Link } from 'react-router-dom';

export default function PageNotFound() {
  document.title = 'Page Not Found'; 
  return (
    <div>
      <main className="error">
        <div className="box">
          <div className="box-grid">
            <h2>Error 404</h2>

            <p>A Pagina que você está procurando não existe ou foi alterada.</p>

            <ul className="notFound--try">
              <h3>Tente:</h3>

              <li>Especificar melhor a Rota</li>
              <li>Verificar o nome da pagina</li>
              <li>Evitar caminhos ilegais</li>
            </ul>

            <div className="btn-404">
              <Link to="/" className="btn-404">
                Voltar
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
