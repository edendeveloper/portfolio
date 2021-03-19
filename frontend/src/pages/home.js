import React from 'react'
import './home.css'

import profile from '../assets/profile.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import javascript from '../assets/javascript.png'
import vue from '../assets/vue.png'
import node from '../assets/node.png'

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
                        <img src={vue} alt="Vuejs"/>
                    </li>
                    <li>
                        <img src={node} alt="Nodejs"/>
                    </li>
                </ul>
            </section>
            <Footer/>
        </div>
    )
}