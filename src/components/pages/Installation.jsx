import * as React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import { MobileAppCTA } from "./components/CtaForMobileApp/App";
import { Navbar } from '../navbar/NavbarApp';
import './css/about.css'
export const About = () => {
    return (
        <>
            <Navbar></Navbar>
        </>
    )
}
