import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./TimeLocation.module.css";

function TimeLocation({ setIsMenuOpen, isMenuOpen }) {
  return (
    <div>
      <Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className={styles.container}>
        <div className={styles.infos}>
          <h2>Visit us</h2>
          <div className={styles.location}>
            <p>123 Coffee Street Latteville, Brewland 45678</p>
          </div>
          <div className={styles.hours}>
            <p>9AM - 2PM</p>
            <p> 5PM - 10PM</p>
          </div>
          <p>Open Anytime</p>
        </div>
        <div className={styles.map}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123572.11472716407!2d121.31294184938217!3d14.563219686501574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339793268d8d4d1d%3A0x41c494267aad76c9!2sSampaloc%2C%20Rizal!5e0!3m2!1sen!2sph!4v1736568231834!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TimeLocation;
