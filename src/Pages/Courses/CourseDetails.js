import React, { useRef } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { useReactToPrint } from "react-to-print";

const CourseDetails = () => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const course = useLoaderData();
    return (
        <div className='m-4 p-4 container'>
            <Card>
                <div className='m-4'>
                    <Button variant="outline-info" onClick={handlePrint} className="print__button mb-2"><FaDownload></FaDownload>  Download PDF </Button>
                    <div ref={componentRef} className="card">
                        <div className="float__start">
                            <h3 className="card-title mb-0">{course.CourseTitle}</h3>
                        </div>
                        <hr />
                        <div className="float__infoss">
                            <ul>
                                <h5>{course.courseBody}</h5>
                                <li> Name : <span> Dr Andrew C S Koh </span> </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                
            </Card>
        </div>
    );
};

export default CourseDetails;