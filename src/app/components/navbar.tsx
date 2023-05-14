
'use client'
import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Box, Flex } from '@chakra-ui/react';
import NavButton from './navButton';

// What should be in this Navbar?
// Projects
// Articles
// Contact Me / About Me
// My Books
const navElements = [
    {linkText: "Projects", path: "/projects"},
    {linkText: "Articles", path: "/blog"},
    {linkText: "Books", path: "/books"},
    {linkText: "Contact Me", path: "/contact-me"}
]

const Navbar = (): ReactElement => {
    return(
        <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="flex-start"
            padding="1.7rem"
        >
            <Box className="text" marginRight="auto" color="red">
                <Link href="/">Daniel Pericich</Link>
            </Box>
            {navElements.map(el => (
                <NavButton path={el.path} linkText={el.linkText} />
            ))}
        </Box>
    )
};

export default Navbar