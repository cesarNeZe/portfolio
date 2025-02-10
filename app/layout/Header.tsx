import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
const Header = () => {
    return (
        <div className="flex flex-row justify-between py-5">
            <p className='font-extrabold text-7xl text-white italic font-playfair'>
                CZ
            </p>
            <a href="https://www.linkedin.com/in/cezar-zaitoun" target="_blank" rel="noopener noreferrer" className=" text-white flex items-center gap-2">
                Check my <FaLinkedinIn />
            </a>
        </div>
    )
}

export default Header
