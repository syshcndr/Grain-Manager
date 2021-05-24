import * as React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import { MobileAppCTA } from "../CtaForMobileApp/App";
import { Navbar } from '../navbar/NavbarApp';
import './css/about.css'

export const MobileDownload = () => {
    return (
        <>
            <Navbar></Navbar>
            <MobileAppCTA></MobileAppCTA>

        </>
    )
}
