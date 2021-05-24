import { Box, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'
import { FcDoughnutChart, FcMultipleDevices, FcPrivacy, FcTimeline } from 'react-icons/fc'
import { Feature } from './Feature'

export const FeatureApp = () => (
    <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
            <Feature title="Secure API Calls" icon={<FcPrivacy />}>
                All your API calls are secure and encrypted.
      </Feature>
            <Feature title="Always Realtime" icon={<FcTimeline />}>
                We serve Your Realtime Data Always with low latency.
      </Feature>
            <Feature title="Incredible statistics" icon={<FcDoughnutChart />}>
                You get the most accurate Realyime Data
      </Feature>
            <Feature title="Support for multiple devices" icon={<FcMultipleDevices />}>
                Supports 'N' Number Of IOT Devices for your needs.
      </Feature>
        </SimpleGrid>
    </Box>
)
