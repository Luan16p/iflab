import * as React from 'react';

export default function About() {
  const info = {
    title: 'IFLab - About',
  };

  document.title = info.title;
  return (
    <div className="principal">
      <main className="about">
        <section className="about-display"></section>

        <section className="about-content"></section>

        <section className="send"></section>
      </main>
    </div>
  );
}
