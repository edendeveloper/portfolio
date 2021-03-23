import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

import cv from '../assets/CV-PT-Welington.docx'
import logo from '../assets/logo.png'

export default function Header() {
    return(
        <header>
                <img src={logo} alt="LOGO"/>
                <Link to="/"><p id="home">HOME</p></Link>
                <Link to="/projects"><p>PROJECTS</p></Link>
                <Link to="/aboutme"><p>ABOUT ME</p></Link>
                <a href={cv} download><p>RESUME</p></a> 
        </header>
    )
}