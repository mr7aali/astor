import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>this is catagory page</h1>
        </div>
    );
};

export default Category;