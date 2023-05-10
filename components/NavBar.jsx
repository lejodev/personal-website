import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.scss";
import Image from "next/image";
import arvlogo from "../public/images/arvlogo.png";
import Link from "next/link";

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);

  //Set background color for navBar
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", changeColor);
  }, []);

  //Handle mobile nav
  const handleClick = () => {
    console.log("GREAT");
    console.log(navActive);
    setNavActive(!navActive);
  };

  return (
    <div
      className={
        scrolled
          ? `${styles.navbar} ${styles["change-background-color"]}`
          : styles.navbar
      }
    >
      <div className={styles["logo-container"]}>
        <Link href="/">
          <Image
            className={styles["logo"]}
            alt="Alejandro Rincón Dev"
            src={arvlogo}
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <div
          className={
            navActive
              ? `${styles["menu-container"]}  ${styles.showMenu}`
              : styles["menu-container"]
          }
        >
          <ul className={styles.menu}>
            <li
              className={
                scrolled
                  ? `${styles["menu-item"]} ${styles["menu-item-on-scroll"]}`
                  : styles["menu-item"]
              }
            >
              <Link href="/">Inicio</Link>
            </li>
            <li
              className={
                scrolled
                  ? `${styles["menu-item"]} ${styles["menu-item-on-scroll"]}`
                  : styles["menu-item"]
              }
            >
              <Link href="/aboutMe">Quién soy</Link>
            </li>
            <li
              className={
                scrolled
                  ? `${styles["menu-item"]} ${styles["menu-item-on-scroll"]}`
                  : styles["menu-item"]
              }
            >
              <Link href="/portfolio">Portafolio</Link>
            </li>
            <li
              className={
                scrolled
                  ? `${styles["menu-item"]} ${styles["menu-item-on-scroll"]}`
                  : styles["menu-item"]
              }
            >
              <Link href="/services">Servicios</Link>
            </li>
            <li
              className={
                scrolled
                  ? `${styles["menu-item"]} ${styles["menu-item-on-scroll"]}`
                  : styles["menu-item"]
              }
            >
              <Link href="/contact">Contacto</Link>
            </li>
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
