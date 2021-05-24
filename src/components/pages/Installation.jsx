import * as React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import {
    Box, Button, Heading, Text, Image,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from "@chakra-ui/react"
import { Navbar } from '../navbar/NavbarApp';
import './css/installation.css'
import { InstallationPage } from '../Installation/InstallationPage';
import { Pop } from '../PopOver/Pop';
import { App } from '../FormWithShadow/App';
export const InstallationPageweb = () => {
    return (
        <>

            <Navbar></Navbar>

            <Box
            maxW="8xl"
            mx="auto"
            px={{ base: '6', lg: '8' }}
            py={{ base: '16', sm: '20' }}
            textAlign="Center">

                <div><FormControl id="first-name" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input placeholder="First Name" />
                <FormLabel>Device Name</FormLabel>
                <Input placeholder="Device Name" />
                </FormControl></div>
                <br></br>
                <Link to="/Aboutuuid"><Button>Submit</Button></Link>


            </Box>



            <InstallationPage></InstallationPage>
        </>
    )
}
