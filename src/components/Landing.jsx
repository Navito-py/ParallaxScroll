import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Landing.css'

export default function Landing() {
    return (
        <div className='divLanding'>
            <Link to='/Scroll'>
                <button className='Btniniciar'></button>
            </Link>
        </div>
    )
}