import React, { useEffect } from 'react';
import '../App.css';
import './Skills.css';
import { Card, Container, Col, Row, Image } from 'react-bootstrap';

export default function Skills() {
  useEffect(() => {
    document.title = "Jesus Garcia Moreno - Skills";
  }, [])

  const data = {
    languages: [
      { title: "Python", image: require('../Images/python.png')},
      { title: "C++", image: require('../Images/cpp.png')},
      { title: "Elixir", image: require('../Images/elixir.png')},
      { title: "JavaScript", image: require('../Images/js.svg')}
    ],
    frameworks: [
      { title: "Phoenix", image: require('../Images/phoenix.png')},
      { title: "NodeJS", image: require('../Images/node.png')},
      { title: "ReactJS", image: require('../Images/react.png')},
      { title: "Bootstrap", image: require('../Images/bootstrap.png')},      
      { title: "Selenium", image: require('../Images/selenium.png')},
    ],
    tools: [
      { title: "AWS", image: require('../Images/aws.png')},
      { title: "Terraform", image: require('../Images/terraform.png')},
      { title: "Kafka", image: require('../Images/kafka.png')},
      { title: "MySQL", image: require('../Images/mysql.png')},
      { title: "MongoDB", image: require('../Images/mongo.png')},
      { title: "Docker", image: require('../Images/docker.png')},
      { title: "CircleCI", image: require('../Images/circleci.png')},
      { title: "Buildkite", image: require('../Images/buildkite.png')},
      { title: "Datadog", image: require('../Images/datadog.png')},
      { title: "Git", image: require('../Images/git.png')}
    ]
  }

  return (
    <Container>
      <Card id="skills">
        <Card.Body>
          <Card.Title as="h2">Technical Skills</Card.Title>
          <hr />
          <Row>
            <Col xs={12} sm={6}>
              <Card.Subtitle as="h4" className="text-muted">Programming Languages:</Card.Subtitle>
              <div className="logos">
                {data.languages.map((item, key) => {
                  return (
                    <Image src={item.image} title={item.title} key={key}/>
                  )
                })}
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <Card.Subtitle as="h4" className="text-muted">Frameworks:</Card.Subtitle>
              <div className="logos">
                {data.frameworks.map((item, key) => {
                  return (
                    <Image src={item.image} title={item.title} key={key}/>
                  )
                })}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Subtitle as="h4" className="text-muted">Technologies:</Card.Subtitle>
              <div className="logos">
                {data.tools.map((item, key) => {
                  return (
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