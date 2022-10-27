import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    return (
        <div>
            <h2>name: {course}</h2>
        </div>
    );
};

export default CourseDetails;