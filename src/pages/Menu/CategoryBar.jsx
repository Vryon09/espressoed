import { NavLink } from "react-router-dom";
import { cafeMenu } from "../../datas/cafeMenus";
import styles from "./CategoryBar.module.css";

function CategoryBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.category}>
        <NavLink to="beverages">
          <h3>{cafeMenu[0].category}</h3>
        </NavLink>
      </div>

      <div className={styles.category}>
        <NavLink to="breakfast&snacks">
          <h3>{cafeMenu[1].category}</h3>
        </NavLink>
      </div>
      <div className={styles.category}>
        <NavLink to="lunch&lightmeals">
          <h3>{cafeMenu[2].category}</h3>
        </NavLink>
      </div>
      <div className={styles.category}>
        <NavLink to="desserts&extras">
          <h3>{cafeMenu[3].category}</h3>
        </NavLink>
      </div>
    </nav>
  );
}

export default CategoryBar;
