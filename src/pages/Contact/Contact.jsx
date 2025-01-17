import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Contact.module.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../../components/Footer/Footer";
import ContactForm from "./ContactForm";

function Contact({ setIsMenuOpen, isMenuOpen }) {
  return (
    <div>
      <Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Contacts</h1>
        </div>

        <div className={styles.infos}>
          <div className={styles.contacts}>
            <div className={styles.sectionHeader}>
              <h2>Connect with Us </h2>
            </div>

            <div className={styles.info}>
              <div className={styles.contact}>
                <FontAwesomeIcon size="xl" icon={faPhone} />
                <p>(123) 456-7890</p>
              </div>
              <div className={styles.contact}>
                <FontAwesomeIcon size="xl" icon={faEnvelope} />
                <p>espressoed@email.com</p>
              </div>
            </div>
          </div>

          <div className={styles.contacts}>
            <div className={styles.sectionHeader}>
              <h2>Follow our Journey</h2>
            </div>

            <div className={styles.info}>
              <div className={styles.contact}>
                <FontAwesomeIcon size="xl" icon={faFacebook} />
                <p>@EspressoedOfficial</p>
              </div>

              <div className={styles.contact}>
                <FontAwesomeIcon size="xl" icon={faXTwitter} />
                <p>@EspressoedX</p>
              </div>

              <div className={styles.contact}>
                <FontAwesomeIcon size="xl" icon={faInstagram} />
                <p>@EspressoedOfficial</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
