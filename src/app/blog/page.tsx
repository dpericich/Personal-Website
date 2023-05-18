'use client'
import React, { useState, useEffect, ReactElement } from 'react';

// I will pull in all the articles pulled from the 
useEffect(() => {
    // will setArticleData here on page load
}, [])

const [articleData, setArticleData] = useState([]);

// No pagination, just do infinite scroll
// https://www.digitalocean.com/community/tutorials/react-react-infinite-scroll

// I will use this API for getting data:
// https://docs.mediumapi.com/
const BlogPage = () => {
    return(
        <div>Hello Daniel, Welcome to the Blog!</div>
    )
};

export default BlogPage;