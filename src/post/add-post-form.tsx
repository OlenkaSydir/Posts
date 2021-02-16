import React, {useEffect, useState} from 'react'
import axios from "axios";
import './form.css'

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
        <div className='list-box'>
            <div className='new-post'>New Post</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className='title'>User ID:</div>
                    <input type='number'
                           value={userId}
                           onChange={handleUserId}
                           className='list-input'/>
                </div>
                <div>
                    <div className='title'>Title:</div>
                    <input type='text'
                           value={title}
                           onChange={handleTitle}
                           className='list-input'
                    />
                </div>
                <div>
                    <div className='title'>Body:</div>
                    <input type='text'
                           value={body}
                           onChange={handleBody}
                           className='list-input'
                    />
                </div>
                <button type='submit' onClick={()=>{
                    window.location.href ='/posts'
                }} className='form-btn'>Submit</button>
            </form>
        </div>
    )
}