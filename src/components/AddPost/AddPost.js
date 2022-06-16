import React from 'react'
import { useState } from 'react';
import styles from '../AddPost/AddPost.module.scss';

const AddPost = ({addPostStore}) => {

    const [titlePost, setTitlePost] = useState('');
    const [bodyPost, setBodyPost] = useState('')

    const addNewPost = () => {
        let isoDateString = new Date().toISOString();

        if(titlePost === '' || bodyPost === ''){
            alert('pole jest puste wpisz coś')
        } else {
            let newObj = {
                id: Math.floor(Math.random() * 1000),
                title: titlePost,
                tresc: bodyPost,
                data_dodania: isoDateString,
            }
            addPostStore(newObj)
            setTitlePost('')
            setBodyPost('')
        }
    }

    return(
        <div className={styles.addWrapper}>
            <h2 className={styles.title}>Dodaj Post</h2>
            <div className={styles.inputWrapper}>

                <input type="text" 
                    className={styles.titleInput} 
                    placeholder="Tytuł"
                    value={titlePost}
                    onChange={e=>setTitlePost(e.target.value)}
                    >
                </input>

                <textarea 
                    className={styles.bodyPost} 
                    placeholder="Pisz post"
                    onChange={e=>setBodyPost(e.target.value)}
                    value={bodyPost}
                    >
                </textarea>

                <div className={styles.btnWrapper}>
                    <button
                        type='button'
                        className={styles.addBtn}
                        onClick={addNewPost}
                        >
                        <span className={styles.addStyl}>Dodaj</span> 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddPost;