import { Box, Button, Heading, Text, Image } from '@chakra-ui/react'
import * as React from 'react'
import './img.css'
export const InstallationPage = () => (

    <Box as="section">
        <Box
            maxW="8xl"
            mx="auto"
            px={{ base: '6', lg: '8' }}
            py={{ base: '16', sm: '20' }}
            textAlign="Left"
        >

            <Heading paddingBottom="40px" as="h1" size="4xl" fontWeight="extrabold" letterSpacing="tight">
                Installation Guide
      </Heading>
            <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
                <Text mt="4" fontSize="xl">

            <p>Setup For "IOT DEVICE"</p>



</Text>
<br></br>
             <h1>Go to</h1>

                <Button><a href ="https://docs.google.com/document/d/16iBbF-MMj8SO01JgGrCbFlLadqkJPGcIFFuXNLK9GFY/edit?usp=sharing" target="_blank">Installation Guide</a></Button>


            </Box>

        </Box>
    </Box>
)
