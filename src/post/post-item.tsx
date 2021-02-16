import React, {useEffect, useState} from 'react'
import {Comment, Post} from "../shared/types";
import axios from "axios";

const PostItem = (props) : JSX.Element=> {
    const {match}=props;
    console.log(match.params);
    const urlForComment = `https://jsonplaceholder.typicode.com/comments?postId=${match.params.postId}`
    const urlForPost = `https://jsonplaceholder.typicode.com/posts/${match.params.postId}`
    const [comments, setComments] = useState<Array<Comment>>([]);
    const [post, setPost] = useState<Post>();
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

    }, [urlForComment, urlForPost])

    return (
        <div>
            <h1>POST</h1>
            {post?.id}
            <br/>
            {post?.title}
            <br/>
            {post?.body}
            <br/>
            <ul>
                {
                    comments.map(comment=>(
                        <li key={comment.id}>
                            {comment.id}
                            {comment.name}
                            {comment.body}
                        </li>
                    ))
                }
            </ul>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
};

export default PostItem;
