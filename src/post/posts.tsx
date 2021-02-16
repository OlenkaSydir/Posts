import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Post} from "../shared/types";
import {AddPostForm} from "./add-post-form";

export const Posts = ():JSX.Element =>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const [posts, setPosts] = useState<Array<Post>>([]);
    const [isNew, setIsNew] = useState<boolean>(false);
    const handleClick = ()=>{
        setIsNew(!isNew);
    }
    useEffect(()=>{
        axios.get(url).then(response=>{
            setPosts(response.data)
        })
    })
    if (isNew){
        return <AddPostForm/>
    }
    return(
        <div>
            <h1>POSTS</h1>
            <ul>
                {
                    posts.map(post=>(
                        <li key={post.id}>
                            {post.title}
                            <br/>
                            {post.body}
                            <button onClick={()=>{
                                window.location.href = '/posts/'+ post.id;
                            }}>
                                Details
                            </button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={handleClick}>
                Add new
            </button>
        </div>
    )
}