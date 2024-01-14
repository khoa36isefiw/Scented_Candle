// BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from './data'; // Adjust the path accordingly

const BlogDetails = () => {
    const { id } = useParams();

    // Find the blog with the matching id
    const blog = blogs.find((blog) => blog.id === parseInt(id, 10));

    // Render loading state if the blog is not found
    if (!blog) {
        return <div>Blog not found</div>;
    }

    const { title, content } = blog;

    return (
        <div>
            <h2>Blog Detail</h2>
            <p>Blog ID: {id}</p>
            <h3>Title: {title}</h3>
            <p>Content: {content}</p>
            {/* Display other details here */}
        </div>
    );
};

export default BlogDetails;
