import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import projectsData from '../data/projects.json';


type Project = {
    name: string,
        stack: string[],
        headline: string,
        description: string,
        img: string,
        source: string,
        demo: string
};

const projects: Project[] = projectsData;

export default function Projects() {
    return (
        <Container fluid={true} className="projects-container">
                <h2 className="header header-main">Projects</h2>
                {
                    projects.map((p, i) => {
                        return (
                            <Row key={i}>
                                <Col md={5} className="project-img">
                                    <img className="img" src={p.img} />
                                </Col>
                                <Col md={7} className="project-content">
                                    <h1 className="name">{p.name}</h1>
                                    <h3 className="headline">{p.headline}</h3>
                                    <h3 className="stack">
                                        {
                                            p.stack.map((s, i) => {
                                                return <span>{(i ? ', ' : '') + s}</span>
                                            })
                                        }
                                    </h3>
                                    <p className="project-description" dangerouslySetInnerHTML={{ __html: p.description }}
                                    />
                                    {p.demo ? <Button variant="outline-light" onClick={()=> window.open(p.demo, "_blank")}>Demo</Button> : ""}
                                    {p.source ? <Button variant="outline-light" onClick={()=> window.open(p.source, "_blank")}>Source</Button> : ""}
                                </Col>
                            </Row>
                        )
                })
                }
            </Container>
    )
}