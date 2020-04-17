import React from 'react';
import Button from 'react-bootstrap/Button';

import contact from '../data/contact.json';

const contacts: { name: string, link: string }[] = contact;

export default function Contact() {
    return (
            <div className="links-container">
                {
                    contacts.map((c) => {
                        return (
                            <Button className="connect-btn" variant="outline-light" onClick={() => window.open(c.link, "_blank")}>{c.name}</Button>
                        )
                    })
                }
            </div>
    )
}


        