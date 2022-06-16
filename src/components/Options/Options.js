import React from "react";
import { useState } from "react";
import styles from '../Options/Options.module.scss';

const Options = () => {

    const[fontSize, setSize] = useState(Number(localStorage.getItem('fontSize')) || 16)
    const[colorBackGround, setColor] = useState(localStorage.getItem('color') || '#fff')

    const handleChanges = () => {
        localStorage.setItem('color', colorBackGround);
        localStorage.setItem('fontSize', fontSize);
        window.location.reload(false)
    }

    return(
        <div className={styles.optionWrapper}>
            <h2 className={styles.title}>Ustawienia</h2>
            <div className={styles.fontsWrapper}>

                <div className={styles.option}>
                    <p className={styles.optionTitle}>Wielkosc tekstu</p>
                    <input
                        value={fontSize} 
                        type="number" 
                        className={styles.sizeInput}
                        onChange={e=>setSize(Number(e.target.value))}
                    >
                    </input>
                </div>

                <div className={styles.option}>
                    <p className={styles.optionTitle}>Kolor tła strony</p>
                    <input
                        value={colorBackGround} 
                        type="color" 
                        className={styles.colorInput}
                        onChange={e=>setColor(e.target.value)}
                    >
                    </input>
                </div>

                <div className={styles.btnWrapper}>
                    <button

                    type="button"
                    className={styles.btnSave}
                    onClick={handleChanges}
                    >
                    <span className={styles.SaveStyl}>Zapisz</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Options;