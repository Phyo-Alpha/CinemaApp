import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Header() {
    return (
        <nav className='flex flex-row justify-between items-center mb-8 mx-12'>
            <h1>
                <Link href="/">
                    <span className=' text-gold text-4xl font-bold'>C I N E M A</span>
                </Link>
            </h1>
            <div className='flex flex-row gap-3'>
                <Button className='gold-border-btn'>Log In</Button>
                <Button className='blue-btn'>Sign Up</Button>
            </div>
        </nav>
    )
}
