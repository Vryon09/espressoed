import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CategoryBar from "./CategoryBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Menu.module.css";

function Menu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div>
      <Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className={styles.container}>
        <CategoryBar />

        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Menu;
