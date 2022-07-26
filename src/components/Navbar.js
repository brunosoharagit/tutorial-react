import { Link } from 'react-router-dom';
import React from 'react';
import styles from '../modules/Navbar.module.css'

function Navbar() {
  return (
    <ul className={styles.list}>
      <li>
        <Link className={styles.navLink} to="/">Home</Link>
      </li>
      <li>
        <Link className={styles.navLink} to="/empresa">Empresa</Link>
      </li>
      <li>
        <Link className={styles.navLink} to="/contato">Contato</Link>
      </li>
    </ul>
  );
}

export default Navbar;
