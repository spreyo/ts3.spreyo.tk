import React from 'react'
import { Connection } from './Connection'

export const Connections = ({ connections }) => {
    return (
        <div className='flex align-middle mt-5 flex-col'>
            <>{connections.map(connection => {
                return <div className='flex align-middle flex-col'>< Connection
                    year={connection["year"]}
                    month={connection["month"]}
                    day={connection["day"]}
                    time={connection["time"]}
                    username={connection["username"]}
                    action={connection["action"]} /><div className=' self-center w-[400px] h-[2px] bg-gray-800 rounded-lg'></div></div>
            })}</>
        </div>
    )
}
