import React from 'react'
import logo from "../assets/myphoto.jpg"
import { CiMail } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { ImGithub } from "react-icons/im";
import { DiCodeigniter } from "react-icons/di";
import { IoCodeSlashSharp } from "react-icons/io5";
import { GrLinkedin } from "react-icons/gr";

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='contentdocument'>
                <img src={logo} alt="" />
                <div className='content5'>
                    <h1>Berkay Yıldırım</h1>
                    <p className='front'>A Front-End Developer</p>
                </div>
            </div>
            <div className='mailsocialbox'>
                <div className="content">
                    <p className='mail'> <CiMail className='mailicon' />  devberkayy@gmail.com</p>
                    <p className='mail'> <SlLocationPin className='mailicon' />  Germany</p>
                    <p className='mail'> <DiCodeigniter className='mailicon' />  Full Time</p>

                </div>
                <div className="social">
                    <a href="https://github.com/dev-berkayy" className='socialbox'><a href="https://github.com/dev-berkayy"><ImGithub className='github' /></a></a>
                    <a href="https://www.linkedin.com/in/berkay-y%C4%B1ld%C4%B1r%C4%B1m-75b9a2239/" className='socialbox'><a href="https://www.linkedin.com/in/berkay-y%C4%B1ld%C4%B1r%C4%B1m-75b9a2239/"><GrLinkedin className='linked' /></a></a>
                </div>
            </div>


        </div >
    )
}

export default Sidebar
