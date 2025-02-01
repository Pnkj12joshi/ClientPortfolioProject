import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoReddit } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";

const Navbar = ( {handlescroll}) => {
    const navigate = useNavigate();
    const socialicons = [
        { icon: <FaWhatsapp />, link: "https://wa.me/9528729636" },
        { icon: <CiMail />, link: "mailto:your-email@example.com" },
        { icon: <FaLinkedinIn />, link: "avinayak171@gmail.com" },
        { icon: <FaXTwitter/>, link: "https://x.com/avinayak171" }
    ];
    
    return (
        <>
                <div className='flex justify-evenly  p-4 text-white gap-7'>
            {socialicons.map((item, index) => (
                <a key={index} href={item.link} target="_blank"  className="text-2xl cursor-pointer hover:text-yellow-400">
                    {item.icon}
                </a>
            ))}
        </div>
        <div>
        <img src='/src/assets/namepic.png' className='w-[500px] h-[250px]'/>
        <div className='flex gap-4 text-white  justify-evenly text-[15px] '>
        <p className=' cursor-pointer hover:text-yellow-400' onClick={()=>handlescroll("about")}>About Me</p>
        <p  className=' cursor-pointer hover:text-yellow-400 ' onClick={()=>handlescroll("service")} >Services</p>
        <p  className=' cursor-pointer hover:text-yellow-400 ' onClick={()=>handlescroll("portfolio")}>Work</p>
        <p  className=' cursor-pointer hover:text-yellow-400 ' onClick={()=>handlescroll("contactus")}>Contact</p>
        </div>
        </div>
        </>

    );
}

export default Navbar
