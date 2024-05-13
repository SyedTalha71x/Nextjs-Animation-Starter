import React from 'react'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { FaHeadSideVirus } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";


const montserrat = Montserrat({
    weight: '800',
    subsets: ['latin']

})

const Page = () => {
    return (
        <header className={montserrat.className}>
            <nav className='bg-transparent cursor-pointer p-6 lg:flex lg:justify-around lg:items-center lg:flex-row md:flex md:justify-around md:items-center md:flex-row sm:flex sm:justify-center sm:items-center sm:flex-col flex justify-center items-center flex-col gap-1  text-white'>
                <div className="left-section flex gap-3">
                    <div>
                        <FaHeadSideVirus className='text-3xl mt-1 text-purple-600 hover:text-purple-800' />
                    </div>
                    <h1 className='text-3xl hover:text-blue-700 tracking-wide'> <span className='text-purple-400 hover:text-blue-700'>Talha</span> Hussain</h1>
                </div>
                <div className="middle-section"></div>
                <div className="right-section flex justify-center items-center">
                    <FaLinkedin className='text-2xl ml-3 text-gray-400 hover:text-red-600' />
                    <FaGithub className='text-2xl ml-3 text-gray-400 hover:text-red-600' />
                    <IoMail className='text-2xl ml-3 text-gray-400 hover:text-red-600' />
                    <FaPhoneAlt className='text-2xl ml-3 text-gray-400 hover:text-red-600' />
                </div>
            </nav>
        </header>
    )
}

export default Page