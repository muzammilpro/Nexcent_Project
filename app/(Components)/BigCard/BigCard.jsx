import Image from 'next/image'
import React from 'react'
import './BigCard.css'
import Button from '../Button/Button'

export default function BigCard(props) {
    return (
        <div className='ParentDiv'>
            <div className='imageDiv'>
                <Image src={props.img} className='cardImage' />
            </div>
            <div className='textDiv'>
                <p className='Heading'>{props.heading}</p> <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptates beatae corrupti hic quaerat recusandae provident ad nesciunt quasi vitae ea modi itaque voluptatibus eos magnam, alias mollitia laudantium similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque temporibus illo velit officia, non assumenda repudiandae aliquid quis aspernatur placeat. Ea sapiente libero repellat amet sequi, enim ratione quam.</p>
                <br />
                <Button text="Learn More" />
            </div>
        </div>
    )
}
