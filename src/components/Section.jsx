import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaFigma } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { RiEnglishInput } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoIosLink } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaCodeFork } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { GoGitPullRequest } from "react-icons/go";
import { PiGitBranch } from "react-icons/pi";

function Section() {
    return (
        <div className='kapsayici'>

            <div className="maindocument">
                <p className='title'>Hİ THERE!</p>

                <p className='document'> I am Berkay, People call me Beko, <br />
                    A Front-End developer with a passion for learning,
                    I am currently improving myself <br /> by working  with  React <FaReact /> and Redux <SiRedux />  and shaping life by learning new things every day.</p>

                <p className='learning'>IF There is anything I can help with, Contact me.
                </p>
            </div>

            <p className='skiltitle'>Skills</p>

            <div className="skills">

                <div className="skillsbox"><IoLogoCss3 className='css' /></div>
                <div className="skillsbox"><IoLogoJavascript className='js' /></div>
                <div className="skillsbox"><FaFigma className='figma' /></div>
                <div className="skillsbox"><RiEnglishInput className='eng' /></div>
                <div className="skillsbox"><SiTailwindcss className='tailwind' /></div>
                <div className="skillsbox"><FaHtml5 className='html' /></div>
                <div className="skillsbox"><FaReact className='react' /></div>
            </div>


            <p className='repotitle'>Projects</p>

            <div className="repos">

                <a href="https://deluxe-pavlova-25e66d.netlify.app/" className='repo'>
                    <div className="content3">
                        <a href=""><IoIosLink />You-Tube-clon</a>

                        <div className="colorbox">
                            <div className='orange'></div>
                            <div className='black'></div>
                            <div className='blue'></div>
                        </div>
                    </div>
                    <div className="content4">
                        <div className="repodocument">
                            <p className='repodocumentcontent'>I made a You-Tube clone in this project</p>
                        </div>

                        <div className='intelbox'>
                            <div className="star"> <span style={{ paddingTop: "2px" }}>2</span> <IoCodeSlash /></div>
                            <div className="branch"><GoGitPullRequest />Html</div>
                        </div>

                    </div>

                </a>

                <a href="https://lively-pastelito-30e1e0.netlify.app/" className='repo'>
                    <div className="content3">
                        <a href=""><IoIosLink /> UIUX-3D PlayX</a>

                        <div className="colorbox">
                            <div className='orange'></div>

                            <div className='blue'></div>
                        </div>
                    </div>
                    <div className="content4">
                        <div className="repodocument">
                            <p className='repodocumentcontent'>I made  a UI / 3D PlayX  design  in this project</p>
                        </div>

                        <div className='intelbox'>
                            <div className="star"> <span style={{ paddingTop: "2px" }}>2</span> <IoCodeSlash /></div>
                            <div className="branch"><GoGitPullRequest />CSS</div>
                        </div>

                    </div>

                </a>
                <a href="https://symphonious-tartufo-af420b.netlify.app/" className='repo'>
                    <div className="content3">
                        <a href=""><IoIosLink /> ToDo-APP</a>

                        <div className="colorbox">
                            <div className='orange'></div>
                            <div className='white'></div>
                            <div className='blue'></div>
                        </div>
                    </div>
                    <div className="content4">
                        <div className="repodocument">
                            <p className='repodocumentcontent'>I made TO-DO application used LocalStroage</p>
                        </div>

                        <div className='intelbox'>
                            <div className="star"> <span style={{ paddingTop: "1px" }}>2</span> <IoCodeSlash /></div>
                            <div className="branch"><GoGitPullRequest />Javascript</div>
                        </div>

                    </div>

                </a>

                <a href="
https://fascinating-torrone-17b500.netlify.app/" className='repo'>
                    <div className="content3">
                        <a href=""><IoIosLink />Spinner-Color-Plus</a>

                        <div className="colorbox">
                            <div className='orange'></div>
                            <div className='black'></div>
                            <div className='blue'></div>
                        </div>
                    </div>
                    <div className="content4">
                        <div className="repodocument">
                            <p className='repodocumentcontent'> I made a simple counter</p>
                        </div>

                        <div className='intelbox'>
                            <div className="star"> <span style={{ paddingTop: "2px" }}>1</span> <IoCodeSlash /></div>
                            <div className="branch"><GoGitPullRequest />Html</div>
                        </div>

                    </div>

                </a>
                <a href="https://github.com/dev-berkayy/30-days-javaScript" className='repo'>
                    <div className="content3">
                        <a href=""><IoIosLink />30 Days-Javascript</a>

                        <div className="colorbox">
                            <div className='black'></div>
                        </div>
                    </div>
                    <div className="content4">
                        <div className="repodocument">
                            <p className='repodocumentcontent'>I made 30 javascirpt projects</p>
                        </div>

                        <div className='intelbox'>
                            <div className="star"> <span style={{ paddingTop: "2px" }}>2</span> <IoCodeSlash /></div>
                            <div className="branch"><GoGitPullRequest />Javascript</div>
                        </div>

                    </div>

                </a>

                <a href="https://github.com/dev-berkayy/dev-berkayy" className='repo'>
                    <div className="content3">
                        <a href=""><IoIosLink />berkayy-config</a>

                        <div className="colorbox">
                            <div className='white'></div>
                        </div>
                    </div>
                    <div className="content4">
                        <div className="repodocument">
                            <p className='repodocumentcontent'></p>
                        </div>

                        <div className='intelbox'>
                            <div className="star"></div>
                            <div className="branch"><GoGitPullRequest />No language</div>
                        </div>

                    </div>

                </a>

            </div>




        </div >
    )
}

export default Section