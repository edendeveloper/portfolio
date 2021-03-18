import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/home'
import Projects from './pages/projects'
import AboutMe from './pages/aboutme'
import Contact from './pages/contact'

export default function Routes() {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/aboutme" component={AboutMe}/>
            <Route path="/contact" component={Contact}/>
        </BrowserRouter>
    )
}