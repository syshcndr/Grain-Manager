import * as React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import { AboutuuidContent } from '../about copy/AboutContent';
import { Navbar } from '../navbar/NavbarApp';
import './css/about.css'
export const Aboutuuid = () => {
    return (
        <>
            <Navbar></Navbar>
            <AboutuuidContent></AboutuuidContent>

        </>
    )
}
