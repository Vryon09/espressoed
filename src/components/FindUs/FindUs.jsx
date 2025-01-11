import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./FindUs.module.css";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function FindUs() {
  return (
    <div className={styles.container}>
      <h2>Find Us</h2>
      <div className={styles.sectionsContainer}>
        <div className={styles.location}>
          <div className={styles.sectionHeader}>
            <FontAwesomeIcon icon={faLocationDot} size="3x" color="#cecbc8" />
          </div>
          <div className={styles.infos}>
            <div className={styles.location}>
              <p>123 Coffee Street Latteville, Brewland 45678</p>
            </div>
            <div className={styles.hours}>
              <p>9AM - 2PM</p>
              <p> 5PM - 10PM</p>
            </div>
            <p>Open Anytime</p>
            <p>
              Your perfect cup of coffee is just around the corner! Visit our
              <Link to="/time&location"> Time & Location Page </Link> for more
              details.
            </p>
          </div>
        </div>

        <div className={styles.contacts}>
          <div className={styles.sectionHeader}>
            <FontAwesomeIcon icon={faPhone} size="3x" color="#cecbc8" />
          </div>

          <div className={styles.infos}>
            <div className={styles.contact}>
              <p>(123) 456-7890</p>
              <FontAwesomeIcon icon={faPhoneFlip} size="xl" />
            </div>

            <div className={styles.contact}>
              <p>espressoed@email.com</p>
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </div>

            <div className={styles.contact}>
              <p>@EspressoedOfficial</p>
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </div>

            <div className={styles.contact}>
              <p>@EspressoedX</p>
              <FontAwesomeIcon icon={faXTwitter} size="xl" />
            </div>

            <div className={styles.contact}>
              <p>@EspressoedOfficial</p>
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </div>

            <p>
              Discover how to reach us effortlessly. Visit our{" "}
              <Link to="/contact">Contact page</Link> for more options or to
              send us your message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindUs;
