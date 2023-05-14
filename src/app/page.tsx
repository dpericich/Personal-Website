'use client'
import Link from 'next/link';
import { Box, Text, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Box 
        width="100%"
        height="30rem"
        backgroundImage="url('hero.jpeg')"
        backgroundPosition="center"
        backgroundSize="contain"
        display="flex"
        justifyContent="center"
        alignItems="center"
       >
        <Text
          fontSize="5rem"
        >
          I'm from the fields not the palace.
        </Text>
       </Box>
       {/* Contact Section */}
       <Box
        backgroundColor="white"
        padding="1.5rem"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
       >
        <Text
          color="blue"
          fontSize="1.7rem"
        >
          Looking to Start a Project, or Have a Bug to Fix?
        </Text>
        <Button
          marginTop="2rem"
          fontSize="2rem"
          padding="1rem"
        >
          <Link href="/contact-me">
            Let's Chat
          </Link>
        </Button>
       </Box>
    </div>
    // Hero section
    // Brief Intro Section
    // Section Linking to "Work with Me"
      )
}
