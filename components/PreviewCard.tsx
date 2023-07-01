'use client';
import { Flex, Image, Text, Heading, Link } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

interface previewCardProps {
    id: number,
    title: string,
    description: string,
    imagePath: string,
    linkPath: string    
}

const PreviewCard = (props: previewCardProps): ReactElement => {
    return(
        <>
            <Flex
                backgroundColor="white"
                color="black"
                padding="1rem"
                key={props.id}
            >
                <Image 
                    src={props.imagePath} 
                    alt={props.title}
                    boxSize="150px"
                    objectFit="cover"
                    margin="0 2rem"
                />
                <Flex flexDir="column" justifyContent="space-between" padding="0.5rem 0">
                    <Heading as="h3" >{props.title}</Heading>
                    <Text>{props.description}</Text>
                    <Link 
                        href={props.linkPath} 
                        _hover={{color: "red"}}
                        _active={{color: "red"}}
                        textDecor="underline"
                    >
                        Continue Reading
                    </Link>
                </Flex>
            </Flex>
        </>
    )
};

export default PreviewCard;