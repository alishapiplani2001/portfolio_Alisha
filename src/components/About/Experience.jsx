import React from 'react'
import { ImPointRight } from "react-icons/im";
import Card from "react-bootstrap/Card";
import { GiPostOffice } from "react-icons/gi";

const Experience = () => {
    return (
        <div>
            <h1 style={{ fontSize: "2.1em" }}>
                My <strong className="purple">Eperience</strong>

            </h1>
            <hr />
            <Card className="quote-card-view">
                <Card.Body>
                    <blockquote className="blockquote mb-0">


                        <div className='p-3'>

                            <p style={{ textAlign: "justify" }}>
                                Full Stack<span className='purple'></span> Developer
                                <br /><GiPostOffice />  <span style={{ padding: "", }}>Sparks Foundation<span className='purple'> Grid Feb 2023</span>,
                                    <br /> <span style={{ paddingLeft: "25px" }}>Internship</span></span>
                                <br />
                                <br />
                                Skills
                            </p>
                            <ul>
                                <li className="about-activity">
                                    <ImPointRight /> Javascript
                                </li>
                                <li className="about-activity">
                                    <ImPointRight /> Html/Css
                                </li>
                                <li className="about-activity">
                                    <ImPointRight /> ReactJs
                                </li>
                                <li className="about-activity">
                                    <ImPointRight /> NodeJs
                                </li>
                            </ul>
                            <footer className="blockquote-footer">Feb-2023 </footer>


                        </div>
                        <hr />
                        
                    </blockquote>
                </Card.Body>
            </Card>


        </div>
    )
}

export default Experience