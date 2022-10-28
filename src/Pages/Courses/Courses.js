import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {

    const CourseDetails = useLoaderData();

    return (
        <div>
            <h2>All courses</h2>
            <Row>
                <Col lg="4">
                    <SideNav></SideNav>
                </Col>
                <Col lg="8">
                    {
                        CourseDetails.map(CourseDetails => <p key={CourseDetails.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={CourseDetails.image} />
                                <Card.Body>
                                    <Card.Title>{CourseDetails.CourseTitle}</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </p>)
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Courses;