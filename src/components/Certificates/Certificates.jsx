import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../Particle';
import CertificateCard from './CertificateCard';
import jsBasic from '../../Assets/Cerificates/jsBasic.jpg';
import JsIntermediate from '../../Assets/Cerificates/JsIntermediate.jpg';
import react from '../../Assets/Cerificates/react.jpg';
import reduxSync from '../../Assets/Cerificates/reduxSync.png';
import GYT from '../../Assets/Cerificates/GYS.png';
import fg from '../../Assets/Cerificates/fg.png';

import react2 from '../../Assets/Cerificates/react2.png';
import advancereact from '../../Assets/Cerificates/advanceReact.png';
import node from '../../Assets/Cerificates/node.png';
import jqry from '../../Assets/Cerificates/jqry.png';
import aws from '../../Assets/Cerificates/aws.png';
import mongoose from '../../Assets/Cerificates/mongoose.png';
import mongodb from '../../Assets/Cerificates/mongodb.png';
import css from '../../Assets/Cerificates/css.png';
import dom from '../../Assets/Cerificates/dom.png';
import html from '../../Assets/Cerificates/html.png';


const Certificates = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My  <strong className="purple">Certificates </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few certificates I've earn.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={jsBasic}
                            title={"The Bits and Bytes of Computer Networking "}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={JsIntermediate}
                            title={"Data Science"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={react}
                            title={"AWS Cloud Practitioner Essentials"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={reduxSync}
                            title={"Fundamentals of Data Analytics"}
                        />
                    </Col>
                    <Col md={6} className="project-card">
                        <CertificateCard
                            img={GYT}
                            title={"Internship at Sparks Foundation"}
                        />
                    </Col>
                    
                </Row>
            </Container>
        </Container>
    )
}

export default Certificates