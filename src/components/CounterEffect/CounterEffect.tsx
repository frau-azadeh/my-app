import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(()=>{
        document.title = `count is : ${count}`;
    },[count])

    const handleSubmit = ()=>{
        setCount((prev)=>prev+1)
    }
  return (
     <div className="p-4 bg-gray-700 rounded-lg shadow-md max-w-md mx-auto">
        <p className='font-bold text-yellow-500'>Count: <span className='font-bold text-white'>{count}</span></p>
        <button 
        className='rounded-md text-white bg-green-500 transition duration-300 hover:bg-green-600 px-4 py-2 mt-2'
        onClick={handleSubmit}>ADD</button>
    </div>
  )
}

export default CounterEffect