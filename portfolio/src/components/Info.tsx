import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        // console.log(timeline);
        // var arr = [];
        // timeline.forEach(t => {
        //     var obj = {

        //     }
        // })
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
            background: color
        }
        return styles;

    }
    render() {
        return (
            <Container fluid={true} className="info-container">
                <h2 className="header">About</h2>
                <Row>
                    <Col md={true} className="info-panel info-about">
                        <Container className="about-section info-current">
                            <h3>Recent</h3>
                            <div>
                                <p>
                                    I recently graduated from Iowa State University and completed my Bachelor's Degree with a major in Computer Science and a minor in French (2016 - 2019).
                                    What am I up to next? I will be heading to Seattle, Washington for my next role as a Software Engineer at Amazon!
                                </p>
                            </div>
                        </Container>
                        <Container className="about-section info-dev">
                            <h3>Interests & Skills</h3>
                            <p>
                                I have primarily held roles in web application and mobile development with focuses in frontend development and cloud computing.
                                My current favorite stack is React with an AWS Backend.
                            </p>
                            <div className="skills">
                                <ul className="skill-list">
                                    {this.state.frontend.map((s, i) => {
                                        return (
                                            <li className="frontend" key={i}><div className="level-style" style={this.getLevelStyles(s.level, "#bd7878")}>{s.name}</div></li>
                                        )
                                    })}
                                </ul>
                                <ul className="skill-list">
                                    {this.state.backend.map((s, i) => {
                                        return (
                                            <li className="backend" key={i}><div className="level-style" style={this.getLevelStyles(s.level, "#76a3e4")}>{s.name}</div></li>
                                        )
                                    })}
                                </ul>
                                <ul className="skill-list">
                                    {this.state.misc.map((s, i) => {
                                        return (
                                            <li className="misc" key={i}><div className="level-style" style={this.getLevelStyles(s.level, "#74a09c")}>{s.name}</div></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </Container>
                        <Container className="about-section info-more">
                            <h3>Links</h3>
                        </Container>
                    </Col>
                    <Col md={true} className="info-panel info-timeline">

                        <Container id="timeline">
                            <h3>Updates</h3>
                            <p>Some exciting professional and personal milestones on my timeline.</p>
                            <ul id="drop">
                                {this.state.updates.map((u, i) => {
                                    return (
                                        <li className="" key={i}>
                                            <div className="date">{u.date}</div>
                                            <div className="event-desc">
                                                <div className="title">{u.event}</div>
                                                <div className="details">{u.details}</div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}