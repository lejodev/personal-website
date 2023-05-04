import React from "react";
import Link from "next/link";
import styles from "../styles/aboutme.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.aboutme}>
      <h1 className={styles.title}>
        <span className={styles["title-span"]}>SOY ALEJANDRO RINCÓN</span>
        <span className={styles["title-span-services"]}>
          DESARROLLO DE SOLUCIONES WEB
        </span>
      </h1>
      <p className={styles["aboutme-description"]}>
        Ayudo a las personas y empresas a convertir sus ideas en sitios web de
        forma profesional. Haciendo su día a día más efectivo, permieitnedo que
        logren sus objetivos.
      </p>
      <button><Link href="/aboutMe">More about me</Link></button>
    </div>
  );
};

export default AboutMe;
