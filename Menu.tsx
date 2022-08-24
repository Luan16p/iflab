import * as React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Container from './Container/Container';

export default function Menu() {
  return (
    <div>
      <nav id="nav">
        <a href="/" className="logo">
          IFLab
        </a>

        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>

          <li>
            <Link to="/about"> About US </Link>
          </li>

          <li>
            <Link to="/fqa"> FQA </Link>
          </li>

          <li>
            <Link to="/register"> Sign Up </Link>
          </li>

          <li>
            <Link to="/login"> Login </Link>
          </li>
        </ul>

        <div className="menu" id="key-menu-press">
          <li>
            <a href="#" id="id-menu">
              Menu
              <div className="menuDesign">
                <div className="1"></div>
                <div className="2"></div>
                <div className="3"></div>
              </div>
            </a>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>

              <li>
                <Link to="/about"> About US </Link>
              </li>

              <li>
                <Link to="/fqa"> FQA </Link>
              </li>

              <li>
                <Link to="/register"> Sign Up </Link>
              </li>

              <li>
                <Link to="/login"> Login </Link>
              </li>
            </ul>
          </li>
        </div>
      </nav>
    </div>
  );
}
