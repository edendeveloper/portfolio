import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

import cv from '../assets/CV-PT-Welington.docx'
import logo from '../assets/logo.png'

export default function Header() {
    return(
        <header>
                <Link to="/portfolio"><img src={logo} alt="LOGO"/></Link>
                <Link to="/aboutme"><p>SOBRE</p></Link>
                <Link to="/projects"><p>PROJETOS</p></Link>
                <a href={cv} download><p>DOWNLOAD CV</p></a> 
        </header>
    )
}