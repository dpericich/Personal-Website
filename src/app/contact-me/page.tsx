'use client'
import React, { ReactElement } from 'react';
import { Flex, Heading, Input, Textarea, Button } from '@chakra-ui/react';

const ContactPage = (): ReactElement => {
    // TODO: Need to add controlled inputs
    return(
        <>
            <Heading as="h1">Contact Me</Heading>
            <Flex flexDir="column" backgroundColor="white" color="black" padding="2rem">
                <Flex flexDir="column" justifyContent="center" alignItems="center" >
                    <Flex justifyContent="center" alignContent="center">
                        <Input placeholder='First Name' padding="0.75rem 1.5rem" fontSize="1.5rem" />
                        <Input placeholder='Last Name' padding="0.75rem 1.5rem" fontSize="1.5rem" />
                    </Flex>
                    <Input placeholder='Email' padding="0.75rem 1.5rem" fontSize="1.5rem" />
                    <Textarea 
                        placeholder="Tell me a little bit about who you are and what you're looking for!" 
                        padding="0.75rem 1.5rem" 
                        fontSize="1.5rem"
                    />
                    <Button size="lg" variant="outline">Submit</Button>
                </Flex>
            </Flex>
        </>
    );
};

export default ContactPage;