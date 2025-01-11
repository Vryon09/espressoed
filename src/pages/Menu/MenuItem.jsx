import styles from "./MenuItem.module.css";

function MenuItem({ name, price }) {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
}

export default MenuItem;
