import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./AboutUs.module.css";

function AboutUs({ setIsMenuOpen, isMenuOpen }) {
  return (
    <div>
      <Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Welcome to Espressoed, where every cup tells a story.</h1>
          <p>
            At Espressoed, we believe that coffee is more than just a drink—it’s
            an experience, a moment to savor, and a way to connect. Our journey
            began with a simple mission: to create a space where quality,
            comfort, and community come together.
          </p>
        </header>

        <div className={styles.space}>
          <div className={styles.imgContainer}>
            <LazyLoadImage
              src="./images/cafe-interior.webp"
              alt="cafe-interior"
              className={styles.imgContainerImg}
            />
          </div>
          <div className={styles.textContainer}>
            <h2>Our Space</h2>
            <p>
              Step into Espressoed and feel at home. Whether you’re here for a
              quiet morning with a book, a catch-up session with friends, or a
              productive work session, our cozy ambiance is designed to make
              your visit memorable.
            </p>
          </div>
        </div>

        <div className={styles.promise}>
          <div className={styles.textContainer}>
            <h2>Our Promise</h2>
            <p>
              We are more than just a café. We are a part of the community.
              That’s why we focus on sustainability, support local suppliers,
              and host events that bring people together. At Espressoed, you’ll
              always find a warm smile and a welcoming atmosphere. <br /> Thank
              you for choosing Espressoed. We’re honored to be your coffee
              destination.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
