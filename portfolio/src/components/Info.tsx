import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import skills from '../data/skills.json';
import timeline from '../data/timeline.json';

type Props = {

}
type State = {
    frontend: { name: string, level: number }[],
    backend: { name: string, level: number }[],
    misc: { name: string, level: number }[],
    updates: { date: string, event: string, details: string }[]
}
export default class Info extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            frontend: [],
            backend: [],
            misc: [],
            updates: []
        });
    }
    componentDidMount() {
        console.log(skills);
        this.setState({
            frontend: skills.frontend,
            backend: skills.backend,
            misc: skills.misc,
            updates: timeline
        });
    }
    getLevelStyles(level: number, color: string) {
        const styles = {
            width: (100 * level / 5) + "%",
            background: color,
            overflow: 'hidden'
        }
        return styles;

    }
    render() {
        return (
            <Container fluid={true} className="info-container">
                <h2 className="header">About</h2>
                <Row>
                    <Col xl={true} className="info-panel info-about">
                        <div className="about-section info-current">
                            <h3 className="sub-header">Recent</h3>
                            <div>
                                <p>
                                    I recently graduated from Iowa State University and completed my Bachelor's Degree with a major in Computer Science and a minor in French (2016 - 2019).
                                    What am I up to next? I will be heading to Seattle, Washington for my next role as a Software Engineer at Amazon!
                                </p>
                            </div>
                        </div>
                        <div className="about-section info-dev">
                            <h3 className="sub-header">Interests & Skills</h3>
                            <p>
                                I have primarily held roles in web application and mobile development with focuses in frontend development and cloud computing.
                                My current favorite stack is React with an AWS Backend.
                            </p>
                            <Row className="skills">
                                <Col className="skill-list">
                                    {this.state.frontend.map((s, i) => {
                                        return (
                                            <li className="frontend" key={i}><div className="level-style" style={this.getLevelStyles(s.level, "#bd7878")}>{s.name}</div></li>
                                        )
                                    })}
                                </Col>
                                <Col className="skill-list">
                                    {this.state.backend.map((s, i) => {
                                        return (
                                            <li className="backend" key={i}><div className="level-style" style={this.getLevelStyles(s.level, "#76a3e4")}>{s.name}</div></li>
                                        )
                                    })}
                                </Col>
                                <Col className="skill-list">
                                    {this.state.misc.map((s, i) => {
                                        return (
                                            <li className="misc" key={i}><div className="level-style" style={this.getLevelStyles(s.level, "#74a09c")}>{s.name}</div></li>
                                        )
                                    })}
                                </Col>
                            </Row>
                        </div>
                        <div className="about-section info-more">
                            <h3 className="sub-header">Contact</h3>
                            <p>Let's connect!</p>
                            <ul className="links-container">
                                <li className="panel"><Button variant="outline-light" onClick={() => window.open("https://www.linkedin.com/in/jjennha", "_blank")}>LinkedIn</Button>{' '}</li>
                                <li className="panel"><Button variant="outline-light" onClick={() => window.open("https://twitter.com/jjennha", "_blank")}>Twitter</Button>{' '}</li>
                                <li className="panel"><Button variant="outline-light" onClick={() => window.open("https://github.com/jjennha", "_blank")}>GitHub</Button>{' '}</li>
                                <li className="panel"><Button variant="outline-light" onClick={() => window.open("http://jennha.com/Resume1.pdf", "_blank")} title="Resume">Resume</Button>{' '}</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={true} className="info-panel info-timeline">

                        <div id="timeline">
                            <div className="timeline-header">
                                <h3 className="header">Updates</h3>
                                <p>Some exciting professional and personal milestones on my timeline.</p>
                            </div>
                            <ul id="drop">
                                {this.state.updates.map((u, i) => {
                                    return (
                                        <li className="" key={i}>
                                            <div className="date">{u.date}</div>
                                            <div className="event-desc">
                                                <div className="title">{u.event}</div>
                                                <div className="details" dangerouslySetInnerHTML={{ __html: u.details }} />
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}