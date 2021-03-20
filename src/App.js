//import { useState, useEffect} from 'react'
//import { BrowserRouter } from "react-router-dom";
//import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav/Nav'
import Jumbotron from './components/Jumbotron/Jumboton'
import Card from './components/Card'
import { Col, Row, Container } from './components/Grid'
import Button from './components/Button'
import Media from './components/Media'


//import './App.css';

function App() {
  return (
 
   <Container >
      <Nav>
      </Nav>
      <Media />
        <Row>
          <Col size="md-3" >
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="jongilprflpic.jpg/100px180" />
              <Card.Body>
              <Card.Title>HW Portfolio Site.</Card.Title>
              <Card.Text>
              This deployed site is the first created Portfolio site.
              </Card.Text>
              <Button variant="primary" a href="https://jgilb28-7.github.io/02-CSS-and-Bootstrap-RP/"
              >Deployed Site</Button>
              <Button variant="primary" a href="https://github.com/JGilb28-7/02-CSS-and-Bootstrap-RP.git"
              >Repository</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col size="md-3">
          <br />
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="jongilprflpic.jpg/100px180" />
              <Card.Body>
                <Card.Title>HW Portfolio Site.</Card.Title>
                <Card.Text>
                This deployed site is the first created Portfolio site.
                </Card.Text>
                <Button variant="primary" a href="https://jgilb28-7.github.io/02-CSS-and-Bootstrap-RP/"
                >Deployed Site</Button>
                <Button variant="primary" a href="https://github.com/JGilb28-7/02-CSS-and-Bootstrap-RP.git"
                >Repository</Button>
              </Card.Body>
            </Card>
          
          </Col>
          <br />
            <Col size="md-3">
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Project Portfolio.</Card.Title>
                <Card.Text>
                  Developed as part of a multi-week project team where a colabative vision was brought to life. 
                  A multi-page website for parents facing the challenges of remote education. This team project 
                  worked to solve the real world problems of parents and educators struggling with Remote Learning
                </Card.Text>
                <Button variant="primary" a href="https://jgilb28-7.github.io/02-CSS-and-Bootstrap-RP/"
                >Deployed Site</Button>
                <Button variant="primary" a href="https://github.com/JGilb28-7/02-CSS-and-Bootstrap-RP.git"
                >Repository</Button>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    <Footer></Footer>
</Container>

  );
}

export default App;
