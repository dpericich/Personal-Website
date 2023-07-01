import React, { ReactElement } from 'react';
import { Flex } from '@chakra-ui/react';
import Link from 'next/link';

type navButtonPropsTypes = {
    path: string,
    linkText: string,
}

const NavButton = (props: navButtonPropsTypes): ReactElement => {
    return(
        <Flex paddingLeft="1rem">
            <Link href={props.path}>{props.linkText}</Link>
        </Flex>
    )
};

export default NavButton;