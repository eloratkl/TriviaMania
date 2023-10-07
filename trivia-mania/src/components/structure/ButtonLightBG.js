import styles from "./Button.module.css";

function ButtonLightBG({ buttonText, clickHandler }) {
    return (
        <>
            <button className={styles.button_light}>{buttonText}</button>
        </>
    )
}

export default ButtonLightBG;