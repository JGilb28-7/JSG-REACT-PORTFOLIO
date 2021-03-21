//import { useState, useEffect} from 'react'
//import { BrowserRouter } from "react-router-dom";
//import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav/Nav'
import Jumbotron from './components/Jumbotron/Jumboton'
import Card from './components/Card'
import { Col, Row, Container } from './components/Grid/index'
import Button from './components/Button'
//import Media from './components/Media'

import Image2 from './assets/ProjectPic1.png'
import Image3 from './assets/PortfolioPage.png'
import Image6 from './assets/project2.png'
import Image5 from './assets/pexelspixabay355904.jpg'


//import './App.css';

function App() {
  return (
    <>
    <container>
     
      <Nav>
      </Nav>
        <Row>
          <Card className="bg-dark text-white">
          <Card.Img src={Image5} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title></Card.Title>
            <Card.Text>
            <h1>Jonathan Gilbert</h1>
                <h3>Full Stack Web Development Student</h3>
                <h3>Portfolio Update</h3>
                <p>"What you are will show in what you do."..Thomas Edison</p>
            </Card.Text>
            <Card.Text></Card.Text>
          </Card.ImgOverlay>
          </Card>
        </Row>
        <br>
          </br>
          <br>
          </br>
        <Row>
          <br>
          </br>
          <Col size="md-3" >
            <Card style={{ width: '20rem' }}>
              <Card.Img 
              variant="top" 
              src={Image3} />
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
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" 
              src={Image2} />
              <Card.Body>
                <Card.Title>Educational Resource Site</Card.Title>
                <Card.Text>
                Developed as part of a multi-week project team where a colabative vision was brought to life. 
                  A multi-page website for parents facing the challenges of remote education. This team project 
                  worked to solve the real world problems of parents and educators struggling with Remote Learning
                </Card.Text>
                <Button variant="primary" a href='https://jgilb28-7.github.io/02-CSS-and-Bootstrap-RP'
                >Deployed Site</Button>
                <Button variant="primary" a href="https://github.com/JGilb28-7/02-CSS-and-Bootstrap-RP.git"
                >Repository</Button>
              </Card.Body>
            </Card>
          </Col>
       

          
          <br />
            <Col size="md-3">
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={Image6}/>
              <Card.Body>
                <Card.Title>Project Portfolio 2</Card.Title>
                <Card.Text>
                  Developed as part of a multi-week project team. This is a Simple to use Banking Application
                </Card.Text>
                <Button variant="primary" onClick={"https://jgilb28-7.github.io/02-CSS-and-Bootstrap-RP/"}>
                >Deployed Site</Button>
                <Button variant="primary" a href="https://github.com/JGilb28-7/02-CSS-and-Bootstrap-RP.git"
                >Repository</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col size="md-3">
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={Image6}/>
              <Card.Body>
                <Card.Title>Project Portfolio 3</Card.Title>
                <Card.Text>
                Developed as part of a multi-week project team. This is a Simple to use Banking Application
                </Card.Text>
                <Button variant="primary" onClick={"https://jgilb28-7.github.io/02-CSS-and-Bootstrap-RP/"}>
                >Deployed Site</Button>
                <Button variant="primary" a href="https://github.com/JGilb28-7/02-CSS-and-Bootstrap-RP.git"
                >Repository</Button>
              </Card.Body>
            </Card>
          </Col>
         

       </Row>

   

    <Footer>

    </Footer>

    </container>
    </>
  );
}

export default App;
