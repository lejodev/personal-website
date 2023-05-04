import React from "react";
import styles from "../styles/aboutme-page.module.scss";
import Image from "next/image";

const aboutme = () => {
  return (
    <div className={styles["aboutme-page"]}>
      <h1 className={styles["about-me-title"]}>Quién soy?</h1>
      <section className={styles.container}>
        <div className={styles["featured-photo"]}></div>
        {/* <Image /> This will be a picture of myself */}
        <p className={styles["about-me-description"]}>
          {/* All this part can come from wordpress via getstaticprops */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          sollicitudin id quam eu interdum. Cras in ex placerat, congue est
          volutpat, aliquam mi. Nam ac faucibus nibh. Aliquam accumsan sit amet
          ante non iaculis. Morbi porta ac purus tristique viverra. Pellentesque
          interdum, est sit amet congue porta, nibh quam eleifend urna, vitae
          ullamcorper urna erat eget sapien. Donec vestibulum justo massa,
          ornare tristique nulla accumsan quis. Aliquam tortor mi, pellentesque
          quis faucibus aliquet, bibendum at justo. Aenean tempor accumsan nulla
          ac vestibulum. Donec congue nunc a risus tristique volutpat. Sed purus
          diam, semper in purus in, vestibulum fringilla eros. Aliquam risus
          risus, sagittis quis vulputate vitae, pulvinar nec tellus. Maecenas
          malesuada dignissim ullamcorper. Pellentesque ac erat ornare arcu
          congue pulvinar. Suspendisse malesuada auctor est sit amet vestibulum.
          Mauris vehicula justo in varius sagittis. Nunc ex diam, mattis non
          ornare sed, vulputate vel nisi. Fusce pretium, neque eget feugiat
          dapibus, sapien urna mollis augue, vel ultrices purus turpis ac justo.
          Donec ac efficitur lacus. Sed commodo volutpat nisl quis faucibus.
          Fusce et mauris elit. Etiam mattis lacus tortor, quis iaculis erat
          mollis a. Pellentesque ipsum lacus, cursus ut quam a, volutpat
          interdum lacus. Praesent varius efficitur mattis. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Donec nec ultrices
          ex. Vestibulum commodo rhoncus magna eu laoreet. Vivamus sed quam in
          magna tempus varius. Aliquam ac justo in est suscipit vulputate non et
          sapien. Pellentesque congue eu ex vel viverra. Curabitur ipsum odio,
          sagittis at nibh sed, vulputate scelerisque sem. Duis vehicula ligula
          eu ipsum tempor, in aliquam nisl eleifend. Aenean nec convallis nunc.
          Integer finibus velit enim, a malesuada est rutrum at.
        </p>
      </section>
    </div>
  );
};

export default aboutme;
