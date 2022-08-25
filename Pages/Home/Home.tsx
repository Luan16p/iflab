import * as React from 'react';

export default function Home() {
  function color(set) {
    return { color: set };
  }

  function sign() {
    window.location.replace(`https://react-ts-6dsvmh.stackblitz.io/register`);
  }

  function contact() {
    window.location.replace(`https://react-ts-6dsvmh.stackblitz.io#makers`);
  }

  const info = {
    title: 'IFLab - Home',
  };

  try {
    document.title = info.title;
  } catch (error) {
    console.log('erro');
  }
  return (
    <div className="principal">
      <main className="home">
        <section className="first-display">
          <div className="flexbox">
            <div className="content">
              <h2>
                Bem vindo(a) ao laboratorio de pesquisa do
                <h2 style={color('green')}>IFMS!</h2>
              </h2>

              <p>
                Area destinada aos estudantes, com fins de produzir pesquisas
                cientificas e auxiliar em trabalho de conclusão de curso.
              </p>

              <div className="btns">
                <button onClick={sign} className="btn1">
                  Sign Up
                </button>
                <button onClick={contact} className="btn2">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="fcon">
            <h2 id="cards-logo">Features</h2>

            <div className="cards">
              <div className="card-single">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                  alt=""
                  id="react"
                />
                <h2>React JS</h2>
                <p>
                  Nosso Site foi programado em ReactJS, uma biblioteca
                  Javascript.
                </p>
              </div>
              <div className="card-single">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
                  alt=""
                  id="ts"
                />
                <h2>Typescript</h2>
                <p>Todas as Animações presentes, foram feitas em Typescript.</p>
              </div>
              <div className="card-single">
                <img
                  src="https://camo.githubusercontent.com/900baefb89e187c8b32cdbb3b440d1502fe8f30a1a335cc5dc5868af0142f8b1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2e737667"
                  alt=""
                />
                <h2>NodeJS</h2>
                <p>Todas as dependencias do site foram aplicadas em NodeJS</p>
              </div>
              <div className="card-single">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png"
                  alt=""
                />
                <h2>Gitlab</h2>
                <p>
                  O repositorio foi 100% gerenciado pelo Gitlab, para manter a
                  estabilidade.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="makers" id="makers">
          <div className="fmakers">
            <h2 id="makers-logo">Equipe</h2>

            <div className="content-makers">
              <div className="users">
                <div className="user1">
                  <img
                    src="https://github.com/Luan16p/Frameworks-img-database/blob/main/user.png?raw=true"
                    alt=""
                  />

                  <div className="txt-user">
                    <h3>Luan Freire Alves da Silva</h3>
                    <p>
                      Desenvolveu o front-end, back-end, rotas e integração
                      nodeJS
                    </p>
                  </div>
                </div>
                <div className="user2">
                  <img
                    src="https://github.com/Luan16p/Frameworks-img-database/blob/main/user.png?raw=true"
                    alt=""
                  />

                  <div className="txt-user">
                    <h3>Sabrina Lima Robert</h3>
                    <p>Desenvolveu as transições, animações e Responsividade</p>
                  </div>
                </div>
              </div>
              <img
                src="https://github.com/Luan16p/Frameworks-img-database/blob/main/Programmer-pana.png?raw=true"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="getStarted">
          <button>Get Start</button>
        </section>
      </main>
    </div>
  );
}
