import React from 'react';
import pro from '../src/assets/pro.jpg';

const About = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Image Section */}
                <div className="col-md-4">
                    <img src={pro} className="img-fluid object-fit" alt="Profile" />
                </div>

                {/* Information Section */}
                <div className="col-md-7">
                    <h1 className="mb-4 mt-5"><b>About Me</b></h1>
                    <p className="text-muted">
                        <i>
                            Looking for a job or internship where I can aspire for challenging assignments in the field of software
                            development. Hardworking with strong abilities. Highly organized, proactive, and punctual with a team-oriented mentality.
                        </i>
                    </p>

                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="list-unstyled">
                                <li><i>Age: 20</i></li>
                                <li><i>Email: sandhyak23901@gmail.com</i></li>
                                <li><i>Phone: 9693491706</i></li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <ul className="list-unstyled">
                                <li><i>City: Noida</i></li>
                                <li><i>Degree: Bachelor's</i></li>
                                <li><i>Freelance: Available</i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
