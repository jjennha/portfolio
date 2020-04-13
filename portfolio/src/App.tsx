import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Cover from './components/Cover';
import Info from './components/Info';
import Container from 'react-bootstrap/Container';
class App extends Component {
  render() {
    return (
      <Container fluid={true} className="App">
        <Cover/>
        <Info/>
      </Container>
    );
  }
}

export default App;
