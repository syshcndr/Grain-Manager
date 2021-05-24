import { Box, Button, Heading, Text } from '@chakra-ui/react'
import * as React from 'react'

export const AboutuuidContent = () => (
    <Box as="section">
        <Box
            maxW="8xl"
            mx="auto"
            px={{ base: '6', lg: '8' }}
            py={{ base: '16', sm: '20' }}
            textAlign="center"
        >

            <Heading paddingBottom="40px" as="h1" size="4xl" fontWeight="extrabold" letterSpacing="tight">
                UUID
      </Heading>
            <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
                <Text mt="4" fontSize="xl">

                THIS IS YOUR UUID :  379281


</Text>
            </Box>

        </Box>
    </Box>
)
