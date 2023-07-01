import React, { ReactElement } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';

type navButtonPropsTypes = {
    path: string,
    linkText: string
}

const NavButton = (props: navButtonPropsTypes): ReactElement => {
    return(
        <Box paddingLeft="1rem">
            <Link href={props.path}>{props.linkText}</Link>
        </Box>
    )
};

export default NavButton;