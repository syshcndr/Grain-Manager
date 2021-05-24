import { Box, Button, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'

export const InstallationPage = () => (
    <Box as="section">
        <Box
            maxW="8xl"
            mx="auto"
            px={{ base: '6', lg: '8' }}
            py={{ base: '16', sm: '20' }}
            textAlign="center"
        >

            <Heading paddingBottom="40px" as="h1" size="4xl" fontWeight="extrabold" letterSpacing="tight">
                About
      </Heading>
            <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
                <Text mt="4" fontSize="xl">

                    Rotting of grains is becoming a very stressful matter as every year tons of grains rot due to improper storage in warehouses. The grains are affected by mold growth, environmental changes, insects and other factors. And as we know agriculture is a big inevitable part of Indian economy this app has a solution for that.
<br></br><br></br>
The Platform will allow the users to control and maintain the threshold temperature and humidity inside the storage houses. You can monitor the conditions inside the warehouse using the app.
You have to connect the hardware device to your warehouse and connect to the app. You will be notified in case the temperature or humidity changes.


</Text>
            </Box>

        </Box>
    </Box>
)
