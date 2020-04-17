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


const getLevelStyles = (level: number, color: string) => {
    const styles = {
        width: (100 * level / 5) + "%",
        background: color,
        overflow: 'hidden'
    }
    return styles;
}

const SkillType = (props: { skillType: string, skillsList: Skill[] }) => {
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

export default function Skills() {
    return (
        <div className="about-section">
            <h3 className="sub-header">Skills</h3>
            <p>I've worked with a lot of different stacks the past few years.  Here's a comprehensive list of what I'm most familiar with but am not limited to.</p>
            <Row className="skills">
                <SkillType skillType="frontend" skillsList={frontend} />
                <SkillType skillType="backend" skillsList={backend} />
                <SkillType skillType="misc" skillsList={misc} />
            </Row>
        </div>
    )
}