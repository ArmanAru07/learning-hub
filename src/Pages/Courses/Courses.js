import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SideNav from './SideNav/SideNav';



const Courses = () => {
    return (
        <div>
            <h2>this is courses Page</h2>
            <Row>
                <Col lg="4">
                    <SideNav></SideNav>
                </Col>
                <Col lg="8">
                </Col>
            </Row>
        </div>
    );
};

export default Courses;