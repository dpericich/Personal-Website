'use client'
import React, { ReactElement } from 'react';
import { Heading, Flex } from '@chakra-ui/react'
import { blogData } from "../../api/data/blogData.json"
import PreviewCard from '../../../components/PreviewCard';

// No pagination, just do infinite scroll
// Figure out how to do 
// https://www.digitalocean.com/community/tutorials/react-react-infinite-scroll

// I will use this API for getting data:
// https://docs.mediumapi.com/

const BlogPage = (): ReactElement => {
    return(
        <div>
            <Heading as="h1" size="4xl" marginLeft="2rem">Recent Blog Posts by Daniel</Heading>
            <Flex flexDir="column" padding="2rem 0">
                {blogData.map(item => {
                    return <PreviewCard 
                        id={item.id} 
                        title={item.title} 
                        description={item.excerpt} 
                        imagePath={item.blogImage} 
                        linkPath={item.linkPath} 
                    />
                })}
            </Flex>
        </div>
    );
};

export default BlogPage;