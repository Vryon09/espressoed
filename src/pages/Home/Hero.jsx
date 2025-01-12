import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.heroTextContainer}>
        {/* <img
          src="./images/coffee-hero.webp"
          alt="coffee"
          className={styles.smallImage}
        /> */}
        <LazyLoadImage
          src="./images/coffee-hero.webp"
          alt="coffee"
          className={styles.smallImage}
        />
        <div className={styles.heroHeader}>
          <h1 className={styles.smallH1}>A Cup Above the Rest.</h1>
          <p className={styles.bigHeader}>A Cup Above the Rest.</p>
        </div>

        <div className={styles.heroP}>
          <p>
            At our café, every detail matters – from selecting the finest beans
            to creating a space you’ll love. It’s not just coffee; it’s an
            experience crafted with care, comfort, and a touch of magic for
            every visitor.
          </p>
        </div>
        <div className={styles.buttons}>
          <Link to="time&location">
            <button className={styles.heroBtn}>Time & Location</button>
          </Link>
        </div>
      </div>
      <div className={styles.bigImage}>
        {/* <img src="./images/coffee-hero.webp" alt="coffee" loading="lazy" /> */}
        <LazyLoadImage
          src="./images/coffee-hero.webp"
          alt="coffee"
          className={styles.bigImageImg}
        />
      </div>
    </div>
  );
}

export default Hero;
