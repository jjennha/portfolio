import React from 'react';
import Container from 'react-bootstrap/Container';


const getProfile = () => {
    const backgroundStyles = {
        backgroundImage: `url(${
            "https://i.imgur.com/K2zj5sk.png"
            })`,
        backgroundSize: '15rem'
    }
    return backgroundStyles;
}

export default function Cover(){
    return (
        <Container fluid={true} className="cover-container">
                <div className="cover-content">
                    <div className="cover-photo">
                        <div className="profile" style={getProfile()}></div>
                    </div>
                    <div className="cover-text">
                        <h1 className="text-intro">Hello World</h1>
                        <h1 className="text-me">I'm Jenny</h1>
                    </div>
                </div>
            </Container>
    )
}
