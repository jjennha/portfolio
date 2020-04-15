import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import InterestSkills from './InterestSkills';
import Contact from './Contact';
import Recent from './Recent';
import Timeline from './Timeline';

export default function info() {
    return (
        <Container fluid={true} className="info-container">
            <h2 className="header header-main">About</h2>
            <Row className="info-row">
                <Col xl={true} className="info-panel info-about">
                    <Recent />
                    <InterestSkills />
                    <Contact />
                </Col>
                <Col xl={true} className="info-panel info-timeline">
                    <Timeline />
                </Col>
            </Row>
        </Container>
    )
}
