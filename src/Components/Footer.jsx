import React, { memo } from 'react'
import Navbar from './Navbar'

const Footer = () => {
    return (
        <footer className="footer py-[2.5rem]         ">
            <Navbar />
        </footer>
    )
}

export default memo(Footer)