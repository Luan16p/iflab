import * as React from 'react';

import Menu from '../Menu';

export default function Header() {
  return (
    <header className="app-header">
      <span className="app-header__logo" />
      <Menu />
    </header>
  );
}
