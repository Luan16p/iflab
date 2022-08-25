import * as React from 'react';

export default function Register() {
  const info = {
    title: 'IFLab - Register',
  };

  document.title = info.title;

  return (
    <div>
      <main className="register">
        <section className="form">
          <form action="/home" method="post">
            <h2>Register</h2>

            <div className="input">
              <input type="text" placeholder="Nome completo" />
              <input type="text" placeholder="Nome de usuario" />

              <input type="email" placeholder="Email" />

              <input type="text" placeholder="Nº de telefone" />

              <input type="password" placeholder="Senha" />

              <input type="password" placeholder="Confirmar Senha" />
            </div>

            <div className="botoes">
              <button className="gotoSubmit" type="submit">
                Criar conta
              </button>

              <p></p>
              <button className="gotoLogin">Já possui uma conta?</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
