import React, { useState, useEffect } from 'react';
import "../styles/section2.css";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { FaSass } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaSpotify } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaHeart } from "react-icons/fa6";
import { FaSteamSymbol } from "react-icons/fa";

function Section2() {
    const [repos, setRepos] = useState([]);
    const username = 'dev-berkayy';

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                const data = await response.json();

                const selectedRepos = data.filter(repo =>
                    repo.name.includes('YouTube-Clone') ||
                    repo.name.includes('Todo-App-Local-Stroage') ||
                    repo.name.includes('Instagram-Clone') ||
                    repo.name.includes('UI-Play-X') ||
                    repo.name.includes('Spinner-Color-Plus') ||
                    repo.name.includes('React-Back-End-Request')
                );

                setRepos(selectedRepos);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchRepos();
    }, []);

    return (
        <div className='section2'>
            <div className='content1'>
                <h1>My Skills</h1>
                <p></p>

                <div className='skillsboxs'>
                    <div className='skillbox'><p className='skillicon'> <FaReact className='skillicon' /> REACT</p></div>
                    <div className='skillbox'><p className='skillicon'> <TbBrandJavascript className='skillicon' /> JavaScript</p></div>
                    <div className='skillbox'><p className='skillicon'> <FaSass className='skillicon' /> SASS</p></div>
                    <div className='skillbox'><p className='skillicon'> <FaCss3Alt className='skillicon' /> CSS</p></div>
                    <div className='skillbox'><p className='skillicon'> <FaHtml5 className='skillicon' /> HTML</p></div>
                    <div className='skillbox'><p className='skillicon'> <RiTailwindCssFill className='skillicon' /> TailWind</p></div>
                    <div className='skillbox'><p className='skillicon'> <FaBootstrap className='skillicon' /> BootStrap</p></div>
                    <div className='skillbox'><p className='skillicon'> <FaGitlab className='skillicon' /> GIT</p></div>
                </div>
            </div>

            <div id='repos' className='content2'>
                <h1>My Repos</h1>
                <p className='desc'></p>

                <div className='repos'>
                    {repos.map((repo) => (
                        <div key={repo.id} className='repo'>
                            <a className='repotitles' target="_blank" rel="noopener noreferrer">
                                <h2 className='repotit'><RiGitRepositoryLine className='title-icon' /> <a className='repolink' href={repo.html_url}>
                                    {repo.name}</a> </h2>
                            </a>
                            {repo.description && <p className='repo-description'>{repo.description}</p>}
                            {repo.language && (
                                <div className='language-container'>
                                    <div className={`language-color ${repo.language.toLowerCase()}`}></div>
                                    <div className='language'>
                                        <p className='star'><FaStar /> {repo.stargazers_count}</p>
                                        <p className='language-title'>{repo.language}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div id='footer' className='footer'> {/* id eklendi */}
                    <div className='socail-media'>
                        <a href="https://www.instagram.com/berkay4yldrm/"><GrInstagram /></a>
                        <a href="https://github.com/dev-berkayy"><ImGithub /></a>
                        <a href="https://www.linkedin.com/in/berkay-y%C4%B1ld%C4%B1r%C4%B1m-75b9a2239/"><FaLinkedin /></a>
                        <a href="https://open.spotify.com/user/l2prsqhmnnmhckrk1ef35apov?si=f76bfdfcfc2a43f5"><FaSpotify /></a>
                        <a href="https://steamcommunity.com/id/7ryzen7/"><FaSteamSymbol /></a>
                    </div>

                    <p> <FaRegCopyright /> Made By <FaHeart /> Dev-Berkayy</p>

                </div>
            </div>
        </div>
    );
}

export default Section2;
