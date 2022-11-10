import React from 'react';
// import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    return (
        <div className='text-center mt-8'>

            <h2 className='text-6xl text-lime-400 font-semibold my-6'>Question Answer</h2>

            <div className='lg:w-1/2 text-center box lg:p-5 lg:ml-96 mt-11'>
                <h2 className='text-4xl font-medium text-cyan-800  pb-9'>Difference between SQL and NoSQL</h2>
                <p className='text-xl font-medium text-cyan-400'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>




            <div className='lg:w-1/2 text-center box lg:p-5 lg:ml-96 mt-11'>
                <h2 className='text-4xl font-medium text-cyan-800  pb-9'>What is JWT, and how does it work?</h2>
                <p className='text-xl font-medium text-cyan-400'>
                    JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                    .</p>
            </div>





            <div className='lg:w-1/2 text-center box lg:p-5 lg:ml-96 mt-11'>
                <h2 className='text-4xl font-medium text-cyan-800  pb-9'>What is the difference between javascript and NodeJS?</h2>
                <p className='text-xl font-medium text-cyan-400'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
            </div>

            <div className='lg:w-1/2 text-center box lg:p-5 lg:ml-96 mt-11'>
                <h2 className='text-4xl font-medium text-cyan-800  pb-9'>How does NodeJS handle multiple requests at the same time?</h2>
                <p className='text-xl font-medium text-cyan-400'>

                    How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>




        </div>
    );
};

export default Blog;