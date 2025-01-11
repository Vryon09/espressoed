import Navbar from "../../components/Navbar/Navbar";
import Hero from "./Hero";
import ExploreMenu from "./ExploreMenu";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import FindUs from "../../components/FindUs/FindUs";
function Home({ setIsMenuOpen, isMenuOpen }) {
  return (
    <div>
      <Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className={styles.container}>
        <div className={styles.hero}>
          <Hero />
        </div>
        <ExploreMenu />
        <FindUs />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
