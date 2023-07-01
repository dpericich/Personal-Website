
'use client'
import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Flex, Box } from '@chakra-ui/react';
import NavButton from './navButton';
import { idText } from 'typescript';

type navElement = {
    path: string,
    linkText: string,
}

const navElements: navElement[] = [
    {linkText: "Projects", path: "/projects"},
    {linkText: "Articles", path: "/blog"},
    {linkText: "Books", path: "/books"},
    {linkText: "Contact Me", path: "/contact-me"}
]

const Navbar = (): ReactElement => {
    return(
        <Flex 
            alignItems="center" 
            justifyContent="flex-start"
            padding="1.7rem"
        >
            <Box className="text" marginRight="auto" color="red" fontSize="3rem">
                <Link href="/">Daniel Pericich</Link>
            </Box>
            {/* Will need to create hamburger here with the links below a certain screen size */}
            {navElements.map(el => (
                <NavButton path={el.path} linkText={el.linkText} key={el.linkText}/>
            ))}
        </Flex>
    )
};

export default Navbar