import { Box, Button, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'

export const Ask = () => (
    <Box as="section">
        <Box
            maxW="8xl"
            mx="auto"
            px={{ base: '6', lg: '8' }}
            py={{ base: '16', sm: '20' }}
            textAlign="center"
        >

            <Heading as="h1" size="4xl" fontWeight="extrabold" letterSpacing="tight">
                Grain Manager
      </Heading>
            <Text mt="4" fontSize="lg">
                Simple Open Source Project For Your Grain Monitoring.
      </Text>

        </Box>
    </Box>
)
