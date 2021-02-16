import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Post} from "../shared/types";
import {AddPostForm} from "./add-post-form";
import './posts.css'

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
            <div className='heading'>
                <h1>POSTS</h1>
                <button onClick={handleClick} className='add-new-btn' style={{display:"inline-block"}}>
                    Add new
                </button>
                <button onClick={()=>{
                    window.location.href='/'
                }} className='add-new-btn' style={{display:"inline-block"}}>
                    Users
                </button>
            </div>
            {/*<ul >*/}
            <table>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                </tr>

                {
                    posts.map(post=>(
                        <tr className='single-post'>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td><button onClick={()=>{
                                window.location.href = '/posts/'+ post.id;
                            }} className='detail-button'>
                                Details
                            </button></td>
                        </tr>
                    ))
                }

            </table>
            {/*</ul>*/}

        </div>
    )
}