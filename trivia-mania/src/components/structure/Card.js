// Card.js

import styles from "./Card.module.css";

function Card({ children }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardChild}>{children}</div>
    </div>
  );
}
export default Card;
