import React from "react";
import styles from "../styles/Services.module.scss";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.title}>Mis servicios</div>
      <p
        className={`${styles["services-description-p1"]}, ${styles.paragraph}`}
      >
        Prestas algún servicio y quieres tener presencia web? Necesitas que tu
        negocio tenga página web? Planeas iniciar tu propio blog? Has pensado en
        tener tu propia página web?. Estás en el lugar indicado.
      </p>
      <p
        className={`${styles["services-description-p2"]}, ${styles.paragraph}`}
      >
        La digitalización de los negocios y de los servicios es cada vez mayor,
        por lo que hacer presencia en internet ya no es una opción, es un
        requisito!.
      </p>
      <p
        className={`${styles["services-description-p3"]}, ${styles.paragraph}`}
      >
        Puedo desarrollarte desde cero tu página web personal, profesional o
        blog, sitio web para tu negocio. Con el propósito de ayudarte a llegar a
        más personas y crecer tu negocio o presencia online
      </p>
      <span>Te ha interesado?</span>
      <button>Contáctame</button>
    </div>
  );
};

export default Services;
