import React from "react";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles["contact"]}>
      <div className={styles["contact-container"]}>
        <div className={styles["contact-disclaimer"]}>
          <h1 className={styles.title}>lorem impsum</h1>
          <p className={`${styles.p}, ${styles.p1}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            elementum enim eu purus hendrerit convallis. Curabitur tempus diam
            ac libero pharetra dictum. Suspendisse hendrerit sem felis, vitae
            volutpat erat luctus consectetur. Vestibulum bibendum a nisi a
            pellentesque. Sed dolor ante, sodales in laoreet et, finibus vel
            enim. Aenean hendrerit sed urna vitae euismod. Aliquam rhoncus ac
            sapien id pulvinar. Suspendisse ultrices non eros sit amet luctus.
            Aenean scelerisque ullamcorper dui, at scelerisque ipsum scelerisque
            vitae.
          </p>
          <p className={`${styles.p}, ${styles.p2}`}>
            Mauris ut neque orci. Nunc sapien diam, varius eu auctor at,
            ullamcorper et odio. Donec dictum eget sapien sed consequat. Etiam
            luctus nibh ac dapibus vulputate. Nunc eu leo non diam mattis dictum
            ut eu sapien. Cras feugiat mauris id orci iaculis, at lobortis diam
            malesuada. Nunc ut massa sagittis, vestibulum nibh sit amet,
            molestie dui. Phasellus a ipsum justo. Pellentesque vel nulla a leo
            mollis elementum. Integer odio odio, accumsan ut ultricies a,
            fringilla sed ex. Proin id ante eu velit venenatis dapibus vitae
            quis est. Nullam ullamcorper ipsum arcu, a commodo neque vestibulum
            et.
          </p>
        </div>
        <form action="" method="post" className={styles.form}>
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className={`${styles.input}, ${styles.name}`}
          />
          {/* <label htmlFor="lastName">Last name</label> */}
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name"
            className={`${styles.input}, ${styles["last-name"]}`}
          />
          {/* <label htmlFor="subject">Subject</label> */}
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className={`${styles.input}, ${styles.subject}`}
          />
          {/* <label htmlFor="message">Message</label> */}
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            className={`${styles.input}, ${styles.message}`}
          />
          <button className={styles["btn-send"]}>SEND IT!</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
