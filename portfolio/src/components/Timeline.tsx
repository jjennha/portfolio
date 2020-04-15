import React from 'react';
import timeline from '../data/timeline.json';

const updates: { date: string, event: string, details: string }[] = timeline;

export default function Timeline() {
    return (
        <div id="timeline">
            <div className="timeline-header">
                <h3 className="header">Updates</h3>
                <p>Some exciting professional and personal milestones on my timeline.</p>
            </div>
            <ul id="drop">
                {updates.map((u, i) => {
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
    )
}