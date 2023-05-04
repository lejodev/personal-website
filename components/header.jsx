import React from "react";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import headerImage from "../public/images/bannersun.jpg";

const Header = () => {
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
    </div>
  );
};

export default Header;
