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
      <Card className="container" id="skills">
        <Card.Body>
          <Card.Title as="h2">Technical Skills</Card.Title>
          <hr />
          <Row>
            <Col style={{borderRight: '1px solid #ccc'}}>
              <Card.Subtitle as="h4" className="text-muted">Programming Languages</Card.Subtitle>
              <div>
                <Image src={python} style={{width: '100px', padding: '5px'}} title="Python"/>
                <Image src={cpp} style={{width: '100px', padding: '5px'}} title="C++"/>
                <Image src={js} style={{width: '100px', padding: '5px'}} title="JavaScript"/>
                <Image src={java} style={{width: '100px', padding: '5px'}} title="Java"/>
              </div>
            </Col>
            <Col>
              <Card.Subtitle as="h4" className="text-muted">Tools & Technologies:</Card.Subtitle>
              <div>
                <Image src={react} style={{width: '100px', padding: '5px'}} title="ReactJS"/>
                <Image src={mongo} style={{width: '100px', padding: '5px'}} title="MongoDB"/>
                <Image src={node} style={{width: '100px', padding: '5px'}} title="NodeJS"/>
                <Image src={bootstrap} style={{width: '100px', padding: '5px'}} title="Bootstrap"/>
                <Image src={jest} style={{width: '100px', padding: '5px'}} title="Jest"/>
                <Image src={git} style={{width: '100px', padding: '5px'}} title="Git"/>
                <Image src={postman} style={{width: '100px', padding: '5px'}} title="Postman"/>
                <Image src={jenkins} style={{width: '100px', padding: '5px'}} title="Jenkins"/>
                <Image src={linux} style={{width: '100px', padding: '5px'}} title="Linux"/>
                <Image src={vs} style={{width: '100px', padding: '5px'}} title="Visual Studio"/>
              </div>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer style={{textAlign: 'center'}} className="text-muted">&copy; 2019 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}

export default Skills;