import React from 'react';
import '../App.css';
import { Card, Container, Col, Row, Image } from 'react-bootstrap';
import python from '../Images/python.png';
import cpp from '../Images/cpp.png';
import java from '../Images/java.png';
import js from '../Images/js.svg';
import react from '../Images/react.png';
import mongo from '../Images/mongo.png';
import node from '../Images/node.png';
import git from '../Images/git.png';
import postman from '../Images/postman.png';
import jenkins from '../Images/jenkins.png';
import linux from '../Images/linux.png';
import vs from '../Images/vs.png';
import bootstrap from '../Images/bootstrap.png';
import jest from '../Images/jest.png';

function Skills() {
  return (
    <Container>
      <Card id="skills">
        <Card.Body>
          <Card.Title as="h2">Technical Skills</Card.Title>
          <hr />
          <Row>
            <Col style={{borderRight: '1px solid #ccc'}}>
              <Card.Subtitle as="h4" className="text-muted">Programming Languages</Card.Subtitle>
              <div className="logos">
                <Image src={python} title="Python"/>
                <Image src={cpp} title="C++"/>
                <Image src={js} title="JavaScript"/>
                <Image src={java} title="Java"/>
              </div>
            </Col>
            <Col>
              <Card.Subtitle as="h4" className="text-muted">Tools & Technologies:</Card.Subtitle>
              <div className="logos">
                <Image src={react} title="ReactJS"/>
                <Image src={mongo} title="MongoDB"/>
                <Image src={node} title="NodeJS"/>
                <Image src={bootstrap} title="Bootstrap"/>
                <Image src={jest} title="Jest"/>
                <Image src={git} title="Git"/>
                <Image src={postman} title="Postman"/>
                <Image src={jenkins} title="Jenkins"/>
                <Image src={linux} title="Linux"/>
                <Image src={vs} title="Visual Studio"/>
              </div>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer style={{textAlign: 'center'}} className="text-muted">&copy; 2020 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}

export default Skills;