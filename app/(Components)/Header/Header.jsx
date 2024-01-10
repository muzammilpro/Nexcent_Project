import React from 'react'
import Button from '../Button/Button'
import Image from 'next/image'
import './Header.css'
import img from '../../../public/Assets/HeaderPic.jpg'

export default function Header() {
    return (
        <div className='Header'>
            <div className='leftSide'>
                <p className='Fheading'>Lessons and insight</p>
                <p className="heading">From 8 Years</p>
                <p>where to grow your bussiness as a photographer: Siter or Social media</p> <br />
                <Button text="Register" />
            </div>
            <div className='rightSide' >
                <Image
                    src={img}
                    alt="Header Image"
                />

            </div>
        </div>
    )
}
