import React, {useEffect, useState} from 'react'
import axios from "axios";
import {User} from "../shared/types";

export const Users = ():JSX.Element =>{
    const [users, setUsers] = useState<Array<User>>([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            setUsers(response.data)
        })
    }, [])

    return(
        <div>
            <h1>USERS</h1>
            <ul>
                {
                    users.map(user=>(
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => {
                window.location.href = '/posts'
            }}>
                Posts
            </button>
        </div>
    )
}