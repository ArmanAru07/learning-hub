import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banare1 from '../../Assets/imaiges/banare22.png';
import banare2 from '../../Assets/imaiges/banare111.webp';
import banare3 from '../../Assets/imaiges/banare333.jpeg';

const Home = () => {

        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
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
        );
    };

    export default Home;