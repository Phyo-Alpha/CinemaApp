"use client"

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Header() {

    const router = useRouter();

    return (
        <nav className='flex flex-row justify-between items-center mb-8 mx-12'>
            <h1>
                <Link href="/">
                    <span className=' text-gold text-4xl font-bold'>C I N E M A</span>
                </Link>
            </h1>
            <div className='flex flex-row gap-3'>
                <SignedOut>
                    <Button
                        className='gold-border-btn'
                        onClick={() => {
                            router.push("/sign-in")
                        }}
                    >
                        Log In
                    </Button>
                    <Button
                        className='blue-btn'
                        onClick={() => {
                            router.push("/sign-up")
                        }}
                    >
                        Sign Up
                    </Button>
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />
                </SignedIn>
            </div>
        </nav>
    )
}
