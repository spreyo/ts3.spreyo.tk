import React from 'react'

export const Connection = ({ year, month, day, time, username, action }) => {
    return (
        <div className='grid grid-cols-4 grid-rows-1 gap-5 text-center w-[400px] self-center text-slate-400'>
            <h1 className=' w-min text-start font-mono font-medium'> {year}/{month}/{day}</h1>
            <h1 className=' w-min text-start font-mono font-medium'> {time}</h1>
            <h1 className=' w-min text-start font-mono font-medium'> {username}</h1>
            <h1 className=' w-min text-start font-mono font-medium'> {action}</h1>
        </div>
    )
}
