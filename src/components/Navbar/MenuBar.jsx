import { NavLink } from "react-router-dom";
import styles from "./MenuBar.module.css";

function MenuBar() {
  return (
    <div className={styles.container}>
      <ul className={styles.menus}>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/time&location">Time & Location</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;
