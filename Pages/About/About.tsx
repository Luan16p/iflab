import * as React from 'react';

export default function About() {
  const info = {
    title: 'IFLab - About',
  };

  document.title = info.title;
  return (
    <div className="principal">
      <main className="about">
        <section className="about-display">
          <div className="flexbox">
            <div className="content" id="about-content">
              <h2 id="about-logo">Sobre Nós!</h2>

              <ul id="about-ul">
                <li>Segurança.</li>
                <li>Confiança.</li>
                <li>Lealdade.</li>
              </ul>

              <p>Rolar para baixo para ver mais...</p>
            </div>
          </div>
        </section>

        <section className="about-content">
          <div className="outcontent fa">
            <p>
              There’s no secret sauce, no wizard behind the curtain. What makes
              Aerolab tick is an interdisciplinary team with a framework that
              fosters candid collaboration If your project does something to
              improve treatments experiences, we want to be there with you to
              achieve the proper care we all deserve.
            </p>

            <button>Outros</button>
          </div>
          <div className="row-title fa">
            <h2>Olá Mundo!</h2>
          </div>
        </section>

        <section className="send"></section>
      </main>
    </div>
  );
}
