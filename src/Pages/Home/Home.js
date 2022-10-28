import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banare1 from '../../Assets/imaiges/banare22.png';
import banare2 from '../../Assets/imaiges/banare111.webp';
import banare3 from '../../Assets/imaiges/banare333.jpeg';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {

    const [index, setIndex] = useState(0);

    const CourseDetails = useLoaderData();

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-40"
                            src={banare1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Learn React With Us</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banare2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Choice Your Favorite Listen</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banare3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Please Register Your Account</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div >
                <h2>courses:{CourseDetails.length} </h2>

                {
                    CourseDetails.map(CourseDetails => <p key={CourseDetails.id}>
                        <div className='row g-2'>
                            <div className='my-4 col-lg-3 col-md-6 col-sm-12'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={CourseDetails.image} />
                                    <Card.Body>
                                        <Card.Title>{CourseDetails.CourseTitle}</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                        <Button variant="primary">Details</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </p>)


                }

            </div>

        </div>
    );
};

export default Home;