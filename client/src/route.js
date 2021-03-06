import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/contact.js"

import General from "./components/general.js"
import Intro from "./components/intro.js"
import Blog from "./components/blog.js"
import Navigation from "./components/nav.js"
import Github from "./components/github.js";
import Kit from "./components/kit.js";
export default function Routers(){
    return(
        <main>
            <Navigation/>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Intro />
                        <General/>
                        
                    </Route>
                    <Route exact path="/blog">
                        <Blog/>
                        
                    </Route>
                    <Route exact path="/portfolio">
                    <Github/>
                 
                    </Route>
                    <Route exact path='/kit'>
                    <Kit/>
                    </Route>
                </Switch>
                <Contact/>
            </Router>
            
        </main>
    )
}