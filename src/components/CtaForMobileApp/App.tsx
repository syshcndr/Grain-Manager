import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Img,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiCheckCircle } from 'react-icons/hi'
import { AppStore, GooglePlay } from './Logos'

export const MobileAppCTA = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} py={{ md: '12' }}>
      <Box shadow="lg" maxW={{ base: 'xl', md: '5xl' }} mx="auto">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          bg={{ md: mode('white', 'gray.700') }}
          pt="16"
          pb="12"
          ps={{ base: '8', md: '14' }}
          pe={{ base: '8', md: '0' }}
        >
          <Box flex="1" textAlign={{ base: 'center', md: 'start' }}>
            <Heading fontWeight="extrabold">Gain Manager</Heading>
            <Text fontSize="lg" mt="2">
              Download our app for monitoring of your grains.
            </Text>
          </Box>
          <Box flex="1" mt={{ base: '6', md: '0' }}>
            <HStack justify="center">
              <Box as="a" href="#">
                <AppStore />
                <Box srOnly>Download from App Store</Box>
              </Box>
              <Box as="a" href="#">
                <GooglePlay />
                <Box srOnly>Download from Google Play</Box>
              </Box>
            </HStack>
          </Box>
        </Flex>
        <Flex direction={{ base: 'column', md: 'row' }} bg="blue.600" color="white">
          <Box flex="1" pt="4" bg="whiteAlpha.200" mb="-px">
            <Img
              maxW="320px"
              mx="auto"
              src="https://res.cloudinary.com/adebayosegun/image/upload/v1612529697/Chakra%20UI/phone.png"
              alt=""
            />
          </Box>
          <Center flex="1" py="8">
            <List fontSize={{ base: 'xl', md: '2xl' }} spacing="4">
              <ListItem>
                <ListIcon as={HiCheckCircle} />
                All Your Sensors at One Place
              </ListItem>
              <ListItem>
                <ListIcon as={HiCheckCircle} />
                Futuristic UI/UX because we Care.
              </ListItem>
              <ListItem>
                <ListIcon as={HiCheckCircle} />
                Great Performance.
              </ListItem>
            </List>
          </Center>
        </Flex>
      </Box>
    </Box>
  )
}
