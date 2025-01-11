import styles from "./Navbar.module.css";
import HiddenMenu from "./HiddenMenu";
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom";

function Navbar({ setIsMenuOpen, isMenuOpen }) {
  function handleHiddenMenu() {
    setIsMenuOpen(true);
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <Link to="/" className={styles.logoContainer}>
            <h1 className={styles.logo}>Espressoed </h1>
          </Link>
          <MenuBar />
          <div className={styles.orderNow}>
            <Link to="/contact">
              <button>Order Now</button>
            </Link>
          </div>
          <button className={styles.hamburgerMenu} onClick={handleHiddenMenu}>
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "42px",
                color: "#cecbc8",
                fontWeight: "400",
              }}
            >
              menu
            </span>
          </button>
        </div>
      </div>
      <HiddenMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}

export default Navbar;
