import * as React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import { AboutContent } from '../about/AboutContent';
import { Navbar } from '../navbar/NavbarApp';
import './css/about.css'
export const About = () => {
    return (
        <>
            <Navbar></Navbar>
            <AboutContent></AboutContent>

        </>
    )
}
