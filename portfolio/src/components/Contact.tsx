import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import contact from '../data/contact.json';

const contacts: { name: string, link: string }[] = contact;

export default function Contact() {
    return (
        <div className="about-section info-more">
            <h4 className="sub-header2">Let's Connect!</h4>
            <ButtonGroup className="links-container">
                {
                    contacts.map((c) => {
                        return (
                            <Button variant="outline-light" onClick={() => window.open(c.link, "_blank")}>{c.name}</Button>
                        )
                    })
                }
            </ButtonGroup>
        </div>
    )
}