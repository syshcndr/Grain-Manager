import {
    Box,
    Button,
    Flex,
    HStack,
    useColorModeValue as mode,
    VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from './Logo'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import './images/img.css';
export const Navbar = () => {
    return (
        <Router>
            <Box >
                <Box as="header" bg={mode('white', 'gray.800')} borderBottomWidth="1px">
                    <Box
                        maxW="7xl"
                        mx="auto"
                        py="4"
                        px={{
                            base: '6',
                            md: '8',
                        }}
                    >
                        <Flex as="nav" justify="space-between">
                            <HStack spacing="8">
                                <Box as="a" href="#" rel="home">
                                    <VisuallyHidden>Grain Manager</VisuallyHidden>
                                    <img
                                        src="https://img.icons8.com/plasticine/2x/wheat.png"
                                        alt="new"
                                        height="20px"
                                    />

                                </Box>
                                <HStack
                                    display={{
                                        base: 'none',
                                        lg: 'flex',
                                    }}
                                    spacing="8"
                                >
                                    <NavLink.Desktop href='/Home' active >HomePage</NavLink.Desktop>
                                    <NavLink.Desktop href='/About' > About</NavLink.Desktop>
                                    <NavLink.Desktop>Installation</NavLink.Desktop>
                                    <NavLink.Desktop>Download App</NavLink.Desktop>


                                </HStack>
                            </HStack>
                            <Flex align="center">
                                <HStack
                                    spacing="8"
                                    display={{
                                        base: 'none',
                                        md: 'flex',
                                    }}
                                >
                                    <Button colorScheme="blue" rounded="full">
                                        Get Started
                </Button>
                                </HStack>
                                <Box ml="5">
                                    <MobileNav />
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
            </Box >
        </Router>
    )
}
