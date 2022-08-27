import * as React from 'react';

import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div>
      <main className="error">
        <div className="box">
          <div className="box-grid">
            <h2>Error 404</h2>

            <p>A Pagina que você está procurando não existe ou foi alterada.</p>

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
