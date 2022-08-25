import * as React from 'react';

export default function Login() {
  const info = {
    title: 'IFLab - Login',
  };

  function set_start() {
    return { textAlign: 'start' };
  }

  document.title = info.title;

  return (
    <div>
      <main className="login">
        <section className="formlogin">
          <form action="" id="login">
            <h2>Login</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="input">
              <input type="text" placeholder="Nome de Usuario" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Senha " />
            </div>

            <a href="#" style={set_start()} id="forgot">
              Esqueci minha senha?
            </a>

            <div className="botoes">
              <button className="log-on">Autenticar</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
