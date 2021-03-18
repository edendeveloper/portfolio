import React from 'react'
import './home.css'

import profile from '../assets/profile.png'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import react from '../assets/react.svg'
import javascript from '../assets/javascript.svg'
import vuejs from '../assets/vuejs.svg'
import nodejs from '../assets/nodejs.svg'

import Header from '../components/header'
import Footer from '../components/footer'

export default function Home({history}) {
    console.log(history)
    return(
        <div className="main-container">
            <Header/>
            <section className="resume">
                <div className="resume-box">
                    <strong>WELINGTON MANFRIN</strong>
                    <p>Olá, meu nome é Welington, tenho 18 anos e me formei no curso técnico de Desenvolvimento de Sistemas, eu sempre fui apaixonado por tecnologia, mas quando descobri a programação decidi que era ali que eu investiria como profissional, desde então almejo ingressar no mercado de trabalho e colocar em prática o conhecimento que já tenho e também adquirir cada vez mais aprendizado fazendo o que eu amo. Gosto de trabalhar com tecnologias atuais, investindo no ecossistema javascript, estudando ferramentas como Vue, React e Node</p>
                </div>
                <div className="profile-image">
                    <img src={profile} alt="Profile"/>
                </div>
            </section>
            <section className="techs">
                <strong>MY STACK</strong>
                <ul>
                    <li>
                        <img src={html} alt="HTML"/>
                    </li>
                    <li>
                        <img src={css} alt="CSS"/>
                    </li>
                    <li>
                        <img src={javascript} alt="Javascript"/>
                    </li>
                    <li>
                        <img src={react} alt="React"/>
                    </li>
                    <li>
                        <img src={vuejs} alt="Vuejs"/>
                    </li>
                    <li>
                        <img src={nodejs} alt="Nodejs"/>
                    </li>
                </ul>
            </section>
            <Footer/>
        </div>
    )
}