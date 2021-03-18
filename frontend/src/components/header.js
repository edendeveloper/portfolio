import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

import cv from '../assets/CV-PT-Welington.docx'

export default function Header({history}) {
    return(
        <header>
            <div>
                <Link to="/"><p>HOME</p></Link>
                <Link to="/projects"><p>PROJECTS</p></Link>
                <Link to="/aboutme"><p>ABOUT ME</p></Link>
                <Link to="/contact"><p>CONTACT</p></Link>
                <a href={cv} download><p>RESUME</p></a>
            </div>  
        </header>
    )
}