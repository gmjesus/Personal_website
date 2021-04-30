import React, { useEffect } from 'react';
import '../App.css';
import './About.css';
import { Card, Container, Image, Col, Row } from 'react-bootstrap';
import photo from '../Images/jesus_gm.jpg'

export default function About() {
  useEffect(() => {
    document.title = "Jesus Garcia Moreno - About";
  }, [])

  return (
    <Container>
      <Card className="vertical-center" id="about">
        <Card.Body>
        <Row>
          <Col xs={12} lg={4} className="text-center">
            <Image src={photo} fluid as="h1" className="profile-img" title="Jesus Garcia Moreno" alt="Jesus Garcia Moreno"/>
          </Col>
          <Col xs={12} lg={8}>
            <Card.Title as="h1" className="text-center">Jesus Garcia Moreno</Card.Title>
            <Card.Subtitle as="h4" className="text-center text-muted">Computer Engineering Student</Card.Subtitle>
            <hr />
            <Card.Text>
              <span>I'm a third-year computer engineering student studying at the <a rel="noopener noreferrer" href="https://uwaterloo.ca/" target="_blank">University of Waterloo</a>. On my free time, I'm usually watching some Netflix and anime, keeping up with soccer, <a rel="noopener noreferrer" href="https://www.goodreads.com/jesus-garciam" target="_blank">reading</a>, attending hackathons and tech challenges, or hanging out with friends!</span>
              <br /><br />
              <span>I have a demonstrated history of working in the information technology and computer software industry. With a strong working knowledge in Python, C/C++, Elixir, and JavaScript, I'm actively seeking new software engineering internships!</span>
            </Card.Text>
          </Col>
        </Row>
        </Card.Body>
        <Card.Footer className="text-center text-muted">&copy; 2021 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}