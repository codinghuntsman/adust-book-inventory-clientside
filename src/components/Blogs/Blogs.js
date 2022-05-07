import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='java-script mt-4'>
                <h5 className=' font-sans fs-6'>1. Difference between javaScript and node js ?</h5>
                <div>
                    <h6 className=' font-serif text-success fw-bold'>JavaScript:</h6>
                    <p className='font-serif'>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                </div>
            </div>
            <div className='nodejs'>
                <div>
                    <h6 className=' font-serif text-success fw-bold'>JavaScript:</h6>
                    <p className='font-serif'>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
                </div>
            </div>

            <div>
                <h5 className=' font-sans fs-6 mt-3'>2. When should you use node js?</h5>
                <div>
                    <li className='font-serif'> It runs Javascript, so you can use the same language on server and client, and even share some code between them</li>
                    <li className='font-serif'> The ever-growing pool of packages accessible through NPM, including client and server-side libraries/modules, as well as command-line tools for web development.</li>
                    <li className='font-serif'>It has become the defacto standard environment in which to run Javascript-related tools and other web-related tools, including task runners, minifiers, beautifiers, linters, preprocessors, bundlers and analytics processors.</li>
                </div>
            </div>

            <div>
                <h5 className=' font-sans fs-6 mt-4'>3. When should you use mongodb?</h5>
                <div>
                    <p className='font-serif'>Most businesses use MongoDB as a distributed database on multiple, geographically dispersed servers in a configuration called a cluster. Clusters allow a MongoDB database to scale horizontally across many servers with sharding. They also let applications replicate data across servers to ensure high availability through a feature MongoDB calls replica sets, thus enhancing the overall performance and reliability of a MongoDB cluster.</p>
                </div>
            </div>
            <div>
                <h5 className=' font-sans fs-6 mt-3'>4. What is the purpose of jwt?</h5>
                <p className='font-serif'>jwt are the new fancy kids around the block when it comes to transporting proofs of identity within an untrusted environment like the Web. In this article, I will describe the true purpose of JWTs. I will compare classical, stateful authentication with modern, stateless authentication. And I will explain why it is important to understand the fundamental difference of both approaches.</p>
            </div>
            <div>
                <h5 className=' font-sans fs-6 mt-3'>5. How jwt works?</h5>
                <p className='font-serif'> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
        </div>
    );
};

export default Blogs;