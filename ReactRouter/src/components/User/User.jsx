import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div className='w-full bg-slate-400 text-center m-auto text-3xl'>User:{userid}</div>
    )
}

export default User
