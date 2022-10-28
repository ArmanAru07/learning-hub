import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courseinfo, setCourseinfo] = useState([]);

    useEffect(() => {
        fetch('https://learning-hub-server-tau.vercel.app/courseinfo')
        .then(res => res.json())
        .then(data => setCourseinfo(data));
    }, [])

    return (
        <div>
            <h2>Courses: {courseinfo.length}</h2>
            <div>
                {
                    courseinfo.map(courses => <p key={courses.id}>
                        <Link  to={`/courses/${courses.id}`}>{courses.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNav;