import React from "react";
import styles from "../styles/Footer.module.scss";
import logo from "../public/images/arvlogo.png";
import Image from "next/image";
import Link from "next/link";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.info} ${styles["footer-item"]}`}>
        <div className={styles["image-container"]}>
          <Image className={styles.image} src={logo} />
        </div>
        <div className="text-container">
          <h5>Acerca de mí</h5>
          <p className="text">
            Mauris ut neque orci. Nunc sapien diam, varius eu auctor at,
            ullamcorper et odio. Donec dictum eget sapien sed consequat. Etiam
            luctus nibh ac dapibus vulputate. Nunc eu leo non diam mattis dictum
            ut eu sapien.
          </p>
        </div>
      </div>
      <div className={`${styles.social} ${styles["footer-item"]}`}>
        <h5 className={`${styles["footer-title"]}`}>Encuéntrame en</h5>
        <div className={styles["socials-list-container"]}>
          <ul className={styles["socials-list"]}>
            <li className={styles["social-item"]}>
              <Link href="https://twitter.com/Alejandro_RV8">Twitter</Link>
            </li>
            <li className={styles["social-item"]}>
              <Link href="https://www.linkedin.com/in/alejandro-rincon-vera-4810b615a/">
                Linkedin
              </Link>
            </li>
            <li className={styles["social-item"]}>
              <Link href="https://github.com/lejodev">Github</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.menu} ${styles["footer-item"]}`}>
        <h5 className={styles["footer-title"]}>alejandrorincondev</h5>
        <div className={styles["menu-list-container"]}>
          <ul className={styles["menu-list"]}>
            <li className={styles["menu-item"]}>Quién soy</li>
            <li className={styles["menu-item"]}>Portafolio</li>
            <li className={styles["menu-item"]}>Servicios</li>
            <li className={styles["menu-item"]}>Contacto</li>
          </ul>
        </div>
      </div>
      <div className={`${styles["lower-menu"]} ${styles["footer-item"]}`}>
        <ul className={styles["lower-menu-list"]}>
          <li className={styles["lower-menu-item"]}>Quién soy</li>
          {/* <li className={styles["lower-menu-item"]}>Portafolio</li> */}
          <li className={styles["lower-menu-item"]}>Servicios</li>
          <li className={styles["lower-menu-item"]}>Contacto</li>
        </ul>
        <ul className={styles["lower-menu-social-icons"]}>
          <li className={styles["lower-menu-item"]}>
            <Link href="https://twitter.com/Alejandro_RV8">
              <BsTwitter />
            </Link>
          </li>
          <li className={styles["lower-menu-item"]}>
            <Link href="https://www.linkedin.com/in/alejandro-rincon-vera-4810b615a/">
              <BsLinkedin />
            </Link>
          </li>
          <li className={styles["lower-menu-item"]}>
            <Link href="https://github.com/lejodev">
              <BsGithub />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
