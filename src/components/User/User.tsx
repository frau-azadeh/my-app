import React, { useEffect, useState } from 'react'

const User:React.FC = () => {
    const[users, setUsers] = useState<{id:number, name:string}[]>([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])



  return (
     <div className="p-4 bg-gray-700 rounded-lg shadow-md max-w-md mx-auto mt-2">
        <ul >
            {users.map(u=><li key={u.id}
                className='text-white text-left'
            >{u.name}</li>)}
        </ul>
    </div>
  )
}

export default User