import React from 'react'
import logo from "../assets/myphoto.jpg"
import { CiMail } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { ImLinkedin2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { SiSpotify } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { GrLinkedin } from "react-icons/gr";

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-contentter'>
                <img src={logo} alt="" />
                <div className='content5'>
                    <h1>Berkay Yıldırım</h1>
                    <p className='front'>A Front-End Developer</p>
                </div>

                <div className="content">
                    <p className='mail'> <CiMail className='mailicon' /> : 7ubisoft7@gmail.com</p>
                    <p className='mail'> <SlLocationPin className='mailicon' /> : Germany</p>
                </div>
                <div className="social">
                    <div className='socialbox'><a href="https://github.com/dev-berkayy"><ImGithub className='github' /></a></div>
                    <div className='socialbox'><a href="https://www.linkedin.com/in/berkay-y%C4%B1ld%C4%B1r%C4%B1m-75b9a2239/"><GrLinkedin className='linked' /></a></div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
