import axios from 'axios';
import React from 'react'
import { useState , useEffect } from 'react';

const UserList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setData(res.data))
    .catch(err =>console.log(err))}
    ,[]);

    return (
        <div>
            <ul >
                { data.map(user => <li style={{listStyleType:'none'}}>username :{user.username} | id :{user.id}<hr/></li>)}
            </ul>
        </div>
    )
}

export default UserList
