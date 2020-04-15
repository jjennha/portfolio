import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import skills from '../data/skills.json';

type Skill = { name: string, level: number }
const frontend: Skill[] = skills.frontend;
const backend: Skill[] = skills.backend;
const misc: Skill[] = skills.misc;

const SkillColor: { [id: string]: string } = {
    "frontend": "#bd7878",
    "backend": "#76a3e4",
    "misc": "#74a09c"
}
const Skills = (props: { skillType: string, skillsList: Skill[] }) => {
    var color = SkillColor[props.skillType];
    return (
        <Col className="skill-list">
            {props.skillsList.map((s, i) => {
                return (
                    <li className={props.skillType} key={i}><div className="level-style" style={getLevelStyles(s.level, color)}>{s.name}</div></li>
                )
            })}
        </Col>
    )
}

const getLevelStyles = (level: number, color: string) => {
    const styles = {
        width: (100 * level / 5) + "%",
        background: color,
        overflow: 'hidden'
    }
    return styles;
}

export default function InterestSkills() {
    return (
        <div className="about-section info-dev">
            <h3 className="sub-header">Interests & Skills</h3>
            <p>
                I have primarily held roles in web application and mobile development with focuses in frontend development and cloud computing.
                My current favorite stack is React with an AWS Backend.
                            </p>
            <Row className="skills">
                <Skills skillType="frontend" skillsList={frontend} />
                <Skills skillType="backend" skillsList={backend} />
                <Skills skillType="misc" skillsList={misc} />
            </Row>
        </div>
    )
}