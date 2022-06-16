import React from "react";
import styles from '../Options/Options.module.scss';

const Options = () => {
    return(
        <div className={styles.optionWrapper}>
            <h2 className={styles.title}>Ustawienia</h2>
            <div className={styles.fontsWrapper}>

                <div className={styles.option}>
                    <p className={styles.optionTitle}>Wielkosc tekstu</p>
                    <input
                        type="number"
                        className={styles.sizeInput}
                    >
                    </input>
                </div>

                <div className={styles.option}>
                    <p className={styles.optionTitle}>Kolor tła strony</p>
                    <input
                        type="color"
                        className={styles.colorInput}
                    >
                    </input>
                </div>

                <div className={styles.btnWrapper}>
                    <button

                    type="button"
                    className={styles.btnSave}
                    >
                    <span className={styles.SaveStyl}>Zapisz</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Options;