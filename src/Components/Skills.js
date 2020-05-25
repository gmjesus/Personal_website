import React, { useEffect } from 'react';
import '../App.css';
import './Skills.css';
import { Card, Container, Col, Row, Image } from 'react-bootstrap';

function Skills() {
  useEffect(() => {
    document.title = "Jesus Garcia Moreno - Skills";
  }, [])

  const data = {
    "languages": [
      { "title": "Python", "image": require('../Images/python.png')},
      { "title": "C++", "image": require('../Images/cpp.png')},
      { "title": "JavaScript", "image": require('../Images/js.svg')},
      { "title": "Java", "image": require('../Images/java.png')}
    ],
    "tools": [
      { "title": "ReactJS", "image": require('../Images/react.png')},
      { "title": "MongoDB", "image": require('../Images/mongo.png')},
      { "title": "NodeJS", "image": require('../Images/node.png')},
      { "title": "Bootstrap", "image": require('../Images/bootstrap.png')},      
      { "title": "Jest", "image": require('../Images/jest.png')},
      { "title": "Git", "image": require('../Images/git.png')},
      { "title": "Postman", "image": require('../Images/postman.png')},
      { "title": "Jenkins", "image": require('../Images/jenkins.png')},
      { "title": "Linux", "image": require('../Images/linux.png')},
      { "title": "Visual Studio", "image": require('../Images/vs.png')}
    ]
  }

  return (
    <Container>
      <Card id="skills">
        <Card.Body>
          <Card.Title as="h2">Technical Skills</Card.Title>
          <hr />
          <Row>
            <Col className="divider">
              <Card.Subtitle as="h4" className="text-muted">Programming Languages:</Card.Subtitle>
              <div className="logos">
                {data.languages.map((item, key) => {
                  return(
                    <Image src={item.image} title={item.title} key={key}/>
                  )
                })}
              </div>
            </Col>
            <Col>
              <Card.Subtitle as="h4" className="text-muted">Tools & Technologies:</Card.Subtitle>
              <div className="logos">
                {data.tools.map((item, key) => {
                  return(
                    <Image src={item.image} title={item.title} key={key}/>
                  )
                })}
              </div>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-center text-muted">&copy; 2020 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}

export default Skills;