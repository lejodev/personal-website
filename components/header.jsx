import React from "react";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import headerImage from "../public/images/bannersun.jpg";

const Temp = () => {
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
      <p>Hi. Soon you will see my personal webpage here. </p>
      <p>It&apos;s under construction</p>
      <footer className={styles.footer}>Alejandro Rincon 2023</footer>
    </div>
  );
};

export default Temp;
