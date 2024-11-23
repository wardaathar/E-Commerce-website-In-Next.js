import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>Wow's Bracelets Collections</h1>
    <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/bracelets">Bracelets</Link>
        <Link href="/contact">Contact</Link>
        <FaShoppingCart style={{color:'white', fontSize:"30px"}}/>
        </nav>
        </header>
  )
}

export default Header