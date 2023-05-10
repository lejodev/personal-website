import React from "react";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import headerImage from "../public/images/bannersun.jpg";

const Header = () => {
  // Phrases carousel here!
  // function handlePhrases() {}
  return (
    <div className={styles.header}>
      <Image
        className={styles.image}
        alt="sunny banner"
        src={headerImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
      />
      <div className={styles.layer}></div>
      <h1 className={styles.phrases}>
        <span>No programes para solucionar problemas.</span>
        <span>Programa para crear soluciones</span>
      </h1>
    </div>
  );
};

export default Header;
