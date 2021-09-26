import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import User from './User'
import './User.scss'


const UserList = () => {
    const [userList, setUserList] = useState([]);
    const [error, seterror] = useState(null)
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>setUserList(res.data) )
        .catch(err =>seterror(err) )
    }, [])
    return (
      <div className="body">
           {userList.map((user)=>(
                <User user={user}/> 
             ))  
           } 
        </div>
    )
}

export default UserList
