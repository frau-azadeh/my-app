import React, { useEffect, useState } from 'react'

const SimpleTimer:React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(()=>{
        const id = setInterval(()=>{
            setSeconds(prev=>prev+1);
        },1000)
        return ()=> clearInterval(id);
    },[])
  return (
    <div className="p-4 bg-gray-700 rounded-lg shadow-md max-w-md mx-auto">
        <p className='text-lg text-yellow-300 font-bold'>Seconds since mounth: <span className='text-lg text-white font-bold'>{seconds}</span></p>
    </div>
  )
}

export default SimpleTimer