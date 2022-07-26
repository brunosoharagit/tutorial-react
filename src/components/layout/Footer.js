import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from '../../modules/Footer.module.css'

function Footer() {
  return (
    <footer>
      <ul className={styles.socialList}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p>Nosso Rodapé</p>
    </footer>
  );
}

export default Footer;
