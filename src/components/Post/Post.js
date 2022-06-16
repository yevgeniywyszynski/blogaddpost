import React from "react";
import styles from '../Post/Post.module.scss';
import {useParams} from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";

const Post = ({getPostById}) => {
    console.log('post', getPostById)

    let{id} = useParams()
    const[post, setPost] = useState({})

    useEffect(() =>{
        setPost(getPostById(id)[0])
    }, [])

    return(
        <div className={styles.postWrapper}>
            <p className={styles.titlePost}>{post.title}</p>
            <p className={styles.bodyPost}>{post.tresc}</p>
            <p className={styles.dataAdd}>{post.data_dodania}</p>
        </div>
    )
}

export default Post;