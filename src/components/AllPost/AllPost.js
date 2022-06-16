import React from 'react';
import styles from '../AllPost/AllPost.module.scss';
import {Link} from 'react-router-dom';

const AllPost = ({allPost}) => {
    console.log('allPost', allPost)
    return(
        <div className={styles.pageWrapper}>
            {allPost.map(post => (
            
            <div className={styles.post} key={post.id}>
                <h2 className={styles.titlePost}>{post.title}</h2>
                <p className={styles.bodyPost}>{post.tresc.substring(0,400) + '...'}</p>
                <div className={styles.timeWrapper}>
                    <div className={styles.time}>
                        <p className={styles.timeAdd} >{post.data_dodania}</p>
                    </div>
                    <Link className={styles.btnMore} to={`/post/${post.id}`} >
                        <span className={styles.moreStyl}>Pokaz wiecej </span>
                    </Link>
                </div>
            </div>

            ))}
        </div>
    )
}

export default AllPost;