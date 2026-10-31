import React from 'react'

const Card = () => {
  return (
    <div className='mx-auto flex max-w-sm items-center gap-x-4 rounded-xl p-6 shadow-lg outline outline-black/5 '>
        <div className='text-xl font-bold'>Chat</div>
            <p className='text-gray-500'>You have a new message!</p>
    </div>
  )
}

export default Card