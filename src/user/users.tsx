import React, {useEffect, useState} from 'react'
import axios from "axios";
import {User} from "../shared/types";
import './users.css'

export const Users = ():JSX.Element =>{
    const [users, setUsers] = useState<Array<User>>([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            setUsers(response.data)
        })
    }, [])

    return(
        <div className="users-container">
            <h1>USERS</h1>
            <br/>
            <ul>
                {
                    users.map(user=>(
                        <li key={user.id} className="user">
                            {user.name}
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => {
                window.location.href = '/posts'
            }} className="btn">
                Posts
            </button>
        </div>
    )
}