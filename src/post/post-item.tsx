import React, {useEffect, useState} from 'react'
import {Comment, Post} from "../shared/types";
import axios from "axios";
import './post.css'

const PostItem = (props) : JSX.Element=> {
    const {match}=props;
    const urlForComment = `https://jsonplaceholder.typicode.com/comments?postId=${match.params.postId}`
    const urlForPost = `https://jsonplaceholder.typicode.com/posts/${match.params.postId}`
    const [comments, setComments] = useState<Array<Comment>>([]);
    const [post, setPost] = useState<Post>({id: 100500, userId: 1, body: '', title:''});
    const [title, setTitle] = useState<string>(post.title)
    const [body, setBody] = useState<string>(post.body)
    const [isDeleted, setIsDeleted] = useState<boolean>(false);
    const [isEdited, setIsEdited] = useState<boolean>(false);
    useEffect(() => {
        console.log(urlForComment);
        axios.get(urlForComment).then(response => {
            setComments(response.data)
            console.log(response.data)
        })
        axios.get(urlForPost).then(response => {
            setPost(response.data)
            console.log(response.data)
        })
        setTitle(post.title);
        setBody(post.body);

    }, [urlForComment, urlForPost])
    const handleDelete =()=>{
        setIsDeleted(true);
        axios.delete(urlForPost).then(response=>{
            console.log(response.status)
        })
    }
    const handleEdit = () =>{
        setIsEdited(true);
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(title, body)
        axios.put(urlForPost, {
            title: title,
            body: body
        })
            .then(response=>{
                console.log(response)
            });
    }
    const handleTitle = (e) =>{
        setTitle(e.target.value);
    }
    const handleBody = (e) =>{
        setBody(e.target.value);
    }


    return (
        <div>
            {!isDeleted&&<div>
                {!isEdited&&<div>
                    <div className='header'>
                        <h1>POST</h1>
                        <button onClick={handleEdit} className='btn' style={{display:"inline-block"}}>Edit</button>
                        <button onClick={handleDelete} className='btn' style={{display:"inline-block"}}>Delete</button>
                        <button onClick={()=>{window.location.href='/posts'}}
                                className='delete-btn'
                                style={{display:"inline-block"}}>Back to posts</button>
                    </div>
                    <br/>
                    <div className='post'>
                        <div><span>Post ID: </span>{post?.id}</div>
                        <div><span>Title: </span>{post?.title}</div>
                        <div><span>Body: </span>{post?.body}</div>
                    </div>
                    <br/>
                    <h2>Comments:</h2>
                    <ul>
                        {
                            comments.map(comment=>(
                                <li key={comment.id}>
                                    <div><span>ID: </span>{comment.id}</div>
                                    <div><span>Name: </span>{comment.name}</div>
                                    <div><span>Body: </span>{comment.body}</div>
                                    <br/>
                                </li>
                            ))
                        }
                    </ul>
                </div>}
            </div>}
            {isDeleted&&<div>
            <h1>The post was successfully deleted</h1>
                <br/>
                <button onClick={()=>{window.location.href='/posts'}} className='delete-btn'>Back to posts</button>
            </div>}
            {isEdited&&<div>
                <form onSubmit={handleSubmit} className='list-box'>
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
                        window.location.href =`/posts/${match.params.postId}`
                    }} className='btn'>Submit</button>
                    <button type='submit' onClick={()=>{
                        window.location.href =`/posts/${match.params.postId}`
                    }} className='btn'>Cancel</button>
                </form>
            </div>}
        </div>
    )
}
;

export default PostItem;
