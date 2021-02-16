import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Posts} from "./posts";


export const AddPostForm = () : JSX.Element =>{
    const [userId, setUserId] = useState();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const handleUserId = (e)=>{
        setUserId(e.target.value);
    }
    const handleTitle = (e)=>{
        setTitle(e.target.value);
    }
    const handleBody = (e)=>{
        setBody(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(userId, title, body)
        axios.post(url, {
            userId: userId,
            title: title,
            body:body
        })
            .then(response=>{
            console.log(response)
        });
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text'
                           value={userId}
                           onChange={handleUserId}
                    />
                </div>
                <div>
                    <input type='text'
                           value={title}
                           onChange={handleTitle}
                    />
                </div>
                <div>
                    <input type='text'
                           value={body}
                           onChange={handleBody}
                    />
                </div>
                <button type='submit' onClick={()=>{
                    window.location.href ='/posts'
                }}>Submit</button>
            </form>
        </div>
    )
}