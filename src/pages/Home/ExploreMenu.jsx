import { Link } from "react-router-dom";
import styles from "./ExploreMenu.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function ExploreMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.menuImage}>
        <LazyLoadImage
          src="./images/explore-menu-1.webp"
          alt="explore-menu-1"
        />
      </div>
      <div className={styles.menuText}>
        <h1>
          Indulge in over 50 artisanal creations, crafted from the finest
          ingredients and freshly prepared to delight your senses every day.
        </h1>
        <div className={styles.buttons}>
          <Link to="/menu">
            <button>Explore Menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExploreMenu;
