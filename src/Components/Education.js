import React from 'react';
import '../App.css';
import { Card, Container } from 'react-bootstrap';
import photo from '../Images/uwaterloo.png'

function Education() {
  return (
    <Container>
      <Card className="container" id="education">
        <Card.Body>
          <Card.Title as="h2">Education</Card.Title>
          <hr />
          <Card.Img style={{float: 'right', width: '150px'}} src={photo} title="University of Waterloo" alt="University of Waterloo"/>
          <h4>Univeristy of Waterloo - Waterloo, ON</h4>
          <div>Bachelor of Applied Science - BASc, 2018-2023</div>
          <div>Program: Computer Engineering, Honours, Co-op</div>
        </Card.Body>
        <Card.Footer style={{textAlign: 'center'}} className="text-muted">&copy; 2019 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}

export default Education;