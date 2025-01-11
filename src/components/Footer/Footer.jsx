import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.companyName}>
        <h3>
          VGA <br /> Creations
        </h3>
      </div>
      <p className={styles.copyright}>
        {" "}
        &copy; VGA Creations. All right reserved.
      </p>
      <div className={styles.socials}>
        <button>
          <FontAwesomeIcon icon={faFacebook} size="2xl" color="#cecbc8" />
        </button>
        <button>
          <FontAwesomeIcon icon={faInstagram} size="2xl" color="#cecbc8" />
        </button>
        <button>
          <FontAwesomeIcon icon={faXTwitter} size="2xl" color="#cecbc8" />
        </button>
      </div>
    </div>
  );
}

export default Footer;
