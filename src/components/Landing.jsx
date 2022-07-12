import React from 'react'
import '../styles/Landing.css'
import IMG from '../img/Landingpopup.png'
import { useState } from 'react'

export default function Landing() {

    const [modal, SetModal] = useState(true)

    const toggleModal = () => {
        SetModal(!modal)
    }

    if (modal){
        document.body.classList.add('ActiveModle')
    }else{
        document.body.classList.remove('ActiveModle')
    }


    return (
        <>
        {
            modal && (

            <div className='modal'>
                <div className='overlay'></div>
                <div className='modal-content'>
                <img onClick={toggleModal} className='imgLanding' src={IMG} alt="lel" />
            </div>
         </div>
        )}
        </>
    )
}
