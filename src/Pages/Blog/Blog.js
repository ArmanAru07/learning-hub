import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div>
            <h2>Blog Page</h2>
            <div className='m-4 p-4'>
            <Card className='mb-4 bg-secondary'>
                <Card.Body>
                    <h4>what is cors?</h4>
                    <p>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p>
                </Card.Body>
            </Card>
            <Card className='mb-4 bg-secondary'>
                <Card.Body>
                    <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p><strong>Firebase</strong> is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections. <br/> Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </Card.Body>
            </Card>
            <Card className='mb-4 bg-secondary'>
                <Card.Body>
                    <h4>How does the private route work?</h4>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </Card.Body>
            </Card>
            <Card className='mb-4 bg-secondary'>
                <Card.Body>
                    <h4>What is Node? How does Node work?</h4>
                    <p>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. <br/> Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
                </Card.Body>
            </Card>
            </div>
            
        </div>
    );
};

export default Blog;