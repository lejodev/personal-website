import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.scss";

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);
  const handleClick = () => {
    console.log("GREAT");
    console.log(navActive);
    setNavActive(!navActive);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles["name-logo"]}>Alejandro Rincon</div>
      <nav>
        <div
          className={
            navActive
              ? `${styles["menu-container"]}  ${styles.showMenu}`
              : styles["menu-container"]
          }
        >
          <ul className={styles.menu}>
            <li className={styles["menu-item"]}>Inicio</li>
            <li className={styles["menu-item"]}>Quién soy</li>
            <li className={styles["menu-item"]}>Portafolio</li>
            <li className={styles["menu-item"]}>Servicios</li>
            <li className={styles["menu-item"]}>Contacto</li>
          </ul>
        </div>
        <div className={styles["burger-menu"]} onClick={handleClick}>
          <div className={`${styles.line1}, ${styles.line}`}></div>
          <div className={`${styles.line2}, ${styles.line}`}></div>
          <div className={`${styles.line3}, ${styles.line}`}></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
