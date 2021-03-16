import React from 'react'
import './home.css'
import profile from '../assets/profile.png'

export default function Home() {
    return(
        <div>
        <header>
            <div id="left">
                LOGO
            </div>
            <div id="right">
                <p>PROJECTS</p>
                <p>ABOUT ME</p>
                <p>CONTACT</p>
            </div>  
        </header>
        <section class="resume">
            <div id="techs">

            </div>
            <div id="profile-image">
                <img src={profile} alt="Profile"/>
            </div>
        </section>
        <section name="history">
            <div>

            </div>
        </section>
        <footer>

        </footer>
        </div>
    )
}