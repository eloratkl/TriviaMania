import styles from "./Button.module.css";

function ButtonDarkBG({ buttonText }) {
  return (
    <>
      <button className={styles.button_dark}>{buttonText}</button>
    </>
  );
}

export default ButtonDarkBG;
