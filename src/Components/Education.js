import React, { useEffect } from 'react';
import '../App.css';
import './Education.css';
import { Card, Container } from 'react-bootstrap';
import photo from '../Images/uwaterloo.png'

function Education() {
  useEffect(() => {
    document.title = "Jesus Garcia Moreno - Education";
  }, [])

  return (
    <Container>
      <Card id="education">
        <Card.Body>
          <Card.Title as="h2">Education</Card.Title>
          <hr />
          <Card.Img className="image" src={photo} title="University of Waterloo" alt="University of Waterloo"/>
          <h4>Univeristy of Waterloo - Waterloo, ON</h4>
          <div>Bachelor of Applied Science - BASc, 2018-2023</div>
          <div>Program: Computer Engineering, Honours, Co-op</div>
        </Card.Body>
        <Card.Footer className="text-center text-muted">&copy; 2020 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}

export default Education;