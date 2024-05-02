import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaFigma } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { RiEnglishInput } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoIosLink } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { FaCodeFork } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { GoGitPullRequest } from "react-icons/go";
import { FaSass } from "react-icons/fa";


function Section() {




    return (
        <div className='kapsayici'>

            <div className="maindocument">
                <p className='title'>HI THERE!</p>

                <p className='document'> I am Berkay, People call me Beko,
                    A Front-End developer with a passion for learning,
                    I am currently improving myself  by working  with <span className='spandocument'> React <FaReact className='documneticon' /> & Redux <SiRedux className='documneticon' />  </span>  I enjoy learning and designing new technologies  other people's designs and codes.</p>


            </div>



            <div className="skills">
                <p className='skiltitle'>Skills</p>
                <div className='skillsboxsection'>
                    <div className="skillsbox"><FaReact className='react' /></div>
                    <div className="skillsbox"><IoLogoJavascript className='js' /></div>
                    <div className="skillsbox"><IoLogoCss3 className='css' /></div>
                    <div className="skillsbox"><FaHtml5 className='html' /></div>
                    <div className="skillsbox"><FaSass className='sasscss' /></div>
                    <div className="skillsbox"><SiTailwindcss className='tailwind' /></div>
                    <div className="skillsbox">  <FaBootstrap className='bootstrap' /></div>
                    <div className="skillsbox"><FaFigma className='figma' /></div>


                </div>
            </div>


            <div class="main"></div>

            <div className="repos">

                <p className='repotitle'>Projects</p>

                <div className='reposcontainer'>
                    <a href="https://instagram-clone-flame-iota.vercel.app/" className='repo'>
                        <div className="content3">
                            <a href="https://instagram-clone-flame-iota.vercel.app/"><IoIosLink />Instagram-Clone</a>

                            <div className="colorbox">

                                <div className='orange'></div>
                                <div className='black'></div>
                                <div className='blue'></div>
                                <div className="branch"> HTML </div>
                            </div>
                        </div>
                        <div className="content4">
                            <div className="repodocument">
                                <p className='repodocumentcontent'>I made a Instagram Clone in this project</p>
                            </div>

                            <div className='intelbox'>
                                <div className="star"> <span className='span2' style={{ paddingTop: "2px" }}>2</span> <IoCodeSlash /></div>
                                <div className="branch"><GoGitPullRequest />Code</div>
                            </div>

                        </div>

                    </a>


                    <a href="https://deluxe-pavlova-25e66d.netlify.app/" className='repo'>
                        <div className="content3">
                            <a href="https://deluxe-pavlova-25e66d.netlify.app/"><IoIosLink />You-Tube-clon</a>

                            <div className="colorbox">

                                <div className='orange'></div>
                                <div className='black'></div>
                                <div className='blue'></div>
                                <div className="branch"> HTML </div>
                            </div>
                        </div>
                        <div className="content4">
                            <div className="repodocument">
                                <p className='repodocumentcontent'>I made a You-Tube clone in this project</p>
                            </div>

                            <div className='intelbox'>
                                <div className="star"> <span className='span2' style={{ paddingTop: "2px" }}>2</span> <IoCodeSlash /></div>
                                <div className="branch"><GoGitPullRequest />Code</div>
                            </div>

                        </div>

                    </a>

                    <a href="https://lively-pastelito-30e1e0.netlify.app/" className='repo'>
                        <div className="content3">
                            <a href="https://lively-pastelito-30e1e0.netlify.app/"><IoIosLink /> 3D-PlayX</a>

                            <div className="colorbox">
                                <div className='orange'></div>
                                <div className='blue'></div>
                                <div className="branch"> CSS </div>
                            </div>
                        </div>
                        <div className="content4">
                            <div className="repodocument">
                                <p className='repodocumentcontent'>I made A UI/3D PlayX design </p>
                            </div>

                            <div className='intelbox'>
                                <div className="star"> <span className='span2' style={{ paddingTop: "2px" }}>1</span> <IoCodeSlash /></div>
                                <div className="branch"><GoGitPullRequest />Code</div>
                            </div>

                        </div>

                    </a>
                    <a href="https://symphonious-tartufo-af420b.netlify.app/" className='repo'>
                        <div className="content3">
                            <a href="https://symphonious-tartufo-af420b.netlify.app/"><IoIosLink /> ToDo-APP</a>

                            <div className="colorbox">
                                <div className='orange'></div>
                                <div className='black'></div>
                                <div className='blue'></div>
                                <div className="branch">Javascript</div>
                            </div>
                        </div>
                        <div className="content4">
                            <div className="repodocument">
                                <p className='repodocumentcontent'>TO-DO application with LocalStroage</p>
                            </div>

                            <div className='intelbox'>
                                <div className="star"> <span className='span2' style={{ paddingTop: "1px" }}>1</span> <IoCodeSlash /></div>
                                <div className="branch"><GoGitPullRequest />Code</div>
                            </div>

                        </div>

                    </a>

                    <a href="
https://fascinating-torrone-17b500.netlify.app/" className='repo'>
                        <div className="content3">
                            <a href="https://fascinating-torrone-17b500.netlify.app/"><IoIosLink />Spinner-Color-Plus</a>

                            <div className="colorbox">
                                <div className='orange'></div>
                                <div className='black'></div>
                                <div className='blue'></div>
                                <div className="branch">Html</div>
                            </div>
                        </div>
                        <div className="content4">
                            <div className="repodocument">
                                <p className='repodocumentcontent'> I made a simple counter</p>
                            </div>

                            <div className='intelbox'>
                                <div className="star"> <span className='span2' style={{ paddingTop: "2px" }}>1</span> <IoCodeSlash /></div>
                                <div className="branch"><GoGitPullRequest />Code</div>
                            </div>

                        </div>

                    </a>
                    <a href="https://github.com/dev-berkayy/30-days-javaScript" className='repo'>
                        <div className="content3">
                            <a href="https://github.com/dev-berkayy/30-days-javaScript"><IoIosLink />30Days-JavaScript</a>

                            <div className="colorbox">
                                <div className='black'></div>
                                <div className="branch">JavaScript</div>
                            </div>
                        </div>
                        <div className="content4">
                            <div className="repodocument">
                                <p className='repodocumentcontent'>I made 30 javaScirpt projects</p>
                            </div>

                            <div className='intelbox'>
                                <div className="star"> <span className='span2' style={{ paddingTop: "2px" }}>1</span> <IoCodeSlash /></div>
                                <div className="branch"><GoGitPullRequest />Code</div>
                            </div>

                        </div>

                    </a>

                    <a href="https://github.com/dev-berkayy/dev-berkayy" className='repo'>
                        <div className="content3">
                            <a href="https://github.com/dev-berkayy/dev-berkayy"><IoIosLink />berkayy-config</a>

                            <div className="colorbox">
                                <div className='white'></div>
                                <div className="branch">No language</div>
                            </div>
                        </div>
                        <div className="content4">
                            <div className="repodocument">
                                <p className='repodocumentcontent'></p>
                            </div>

                            <div className='intelbox'>
                                <div className="star"></div>
                                <div className="branch"><GoGitPullRequest /> Code</div>
                            </div>

                        </div>

                    </a>

                </div>

            </div>


        </div >
    )
}

export default Section
