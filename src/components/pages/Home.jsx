import * as React from 'react';
import { FooterApp } from '../FooterWithTwoColumns/App';
import { Ask } from '../greetings/GreetingsApp';
import { Navbar } from '../navbar/NavbarApp';

import { FeatureApp } from '../TwoByTwoFeatures/FeatureApp';

export const HomePage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Ask></Ask>
            <FeatureApp></FeatureApp>
            <FooterApp></FooterApp>
        </>
    )
}
