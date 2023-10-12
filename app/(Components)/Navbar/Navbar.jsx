import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/Assets/logo.jpg'
import Link from 'next/link'
import './Navbar.css'


export default function Navbar() {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image
                        src={Logo}
                        width={50}
                        height={50}
                        alt="Picture of the author"
                    />

                    <span class="ml-3 text-xl">Nexcent</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className='anchorTag ' href="/">Home</Link>
                    <Link className='anchorTag' href="/">Features</Link>
                    <Link className='anchorTag' href="/">Community</Link>
                    <Link className='anchorTag' href="/">Blog</Link>
                    <Link className='anchorTag' href="/">Pricing</Link>
                </nav>
                <button class="inline-flex items-center bg-lime-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Register Now
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}
