import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./HiddenMenu.module.css";
import { useNavigate } from "react-router-dom";

function HiddenMenu({ isMenuOpen, setIsMenuOpen }) {
  const navigate = useNavigate();

  function handleClose() {
    setIsMenuOpen(false);
  }

  function navigateTo(page) {
    navigate(`/${page}`);

    setIsMenuOpen(false);
  }

  return (
    <div className={styles.hiddenMenu} style={isMenuOpen ? { left: 0 } : {}}>
      <div className={styles.close}>
        <button onClick={handleClose}>
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "42px",
              color: "#cecbc8",
              fontWeight: "400",
            }}
          >
            close
          </span>
        </button>
      </div>
      <ul className={styles.options}>
        <li onClick={() => navigateTo("")}>Home</li>
        <li onClick={() => navigateTo("menu")}>Menu</li>
        <li onClick={() => navigateTo("time&location")}>Time & Location</li>
        <li onClick={() => navigateTo("contact")}>Contact</li>
        <li onClick={() => navigateTo("about")}>About Us</li>
      </ul>
      <footer className={styles.socials}>
        <button>
          <FontAwesomeIcon icon={faFacebook} size="2xl" color="#cecbc8" />
        </button>
        <button>
          <FontAwesomeIcon icon={faInstagram} size="2xl" color="#cecbc8" />
        </button>
        <button>
          <FontAwesomeIcon icon={faXTwitter} size="2xl" color="#cecbc8" />
        </button>
      </footer>
    </div>
  );
}

export default HiddenMenu;
