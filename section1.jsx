import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "../styles/section1.css";
import svg1 from "../assets/svg1.svg";
import svg2 from "../assets/svg2.svg";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { RiGitRepositoryLine } from "react-icons/ri";
import { BiHome } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";

function Section1() {
    const [activeLink, setActiveLink] = useState('');

    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    return (
        <div className='section1'>
            <nav className='nav'>
                <Link to="section1" smooth={true} duration={400} onSetActive={() => handleSetActive('section1')}>
                    <p className={`nav-buttons ${activeLink === 'section1' ? 'active' : ''}`}> <BiHome className='icons' /> </p>
                </Link>
                <Link to="content1" smooth={true} duration={400} onSetActive={() => handleSetActive('content1')}>
                    <p className={`nav-buttons ${activeLink === 'content1' ? 'active' : ''}`}> <MdOutlineBusinessCenter className='icons' />  </p>
                </Link>
                <Link to="repos" smooth={true} duration={400} onSetActive={() => handleSetActive('repos')}>
                    <p className={`nav-buttons ${activeLink === 'repos' ? 'active' : ''}`}> <RiGitRepositoryLine className='icons' />  </p>
                </Link>
                <Link to="footer" smooth={true} duration={600} onSetActive={() => handleSetActive('footer')}>
                    <p className={`nav-buttons ${activeLink === 'footer' ? 'active' : ''}`}> <IoShareSocialOutline className='icons' />  </p>
                </Link>
            </nav>

            <img className='images' src={svg1} alt="" />
            <img className='images2' src={svg2} alt="" />

            <div className='textboxs'>
                <h1 className='center-texts'>Hello, I'm Berkay</h1>
                <p>A Front-End Developer</p>
                <div className='social'>
                    <a href="https://www.linkedin.com/in/berkay-y%C4%B1ld%C4%B1r%C4%B1m-75b9a2239/" className='socialbox'><SlSocialLinkedin /></a>
                    <a href="https://github.com/dev-berkayy" className='socialbox'><FiGithub /></a>
                    <a href="https://www.instagram.com/berkay4yldrm/" className='socialbox'><FaInstagram /></a>
                </div>
            </div>

            <div className='socialboxs'>
                <a href="" className='cv'><MdOutlineFileDownload className='download' />Cv Download</a>
            </div>
        </div>
    );
}

export default Section1;
