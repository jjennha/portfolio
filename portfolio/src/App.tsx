import React from 'react';
import Container from 'react-bootstrap/Container';

import Cover from './components/Cover';
import Info from './components/Info';
import Projects from './components/Projects';

export default function App() {
    return (
      <Container fluid={true} className="App">
        <Cover/>
        <Info/>
        <Projects/>
      </Container>
    )
}

