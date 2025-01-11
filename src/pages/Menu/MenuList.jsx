import MenuItem from "./MenuItem";
import styles from "./MenuList.module.css";

function MenuList({ menu }) {
  return (
    <div className={styles.container}>
      {menu.items.map((menu) => (
        <MenuItem name={menu.name} price={menu.price} />
      ))}
    </div>
  );
}

export default MenuList;
