import styles from "./Button.module.css";

function ButtonLightBG({ buttonText }) {
    return (
        <>
            <button className={styles.button_light}>{buttonText}</button>
        </>
    )
}

export default ButtonLightBG;