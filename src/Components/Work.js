import React, { useEffect } from 'react';
import '../App.css';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import bioconnect from '../Images/bioconnect.png';
import pipers from '../Images/pipers.jpg';
import elliott from '../Images/elliott.png';
import manulife from '../Images/manulife.png';

function Work() {
  useEffect(() => {
    document.title = "Jesus Garcia Moreno - Work";
  }, [])

  return (
    <Container>
      <Card id="work">
        <Card.Body>
          <Card.Title as="h2">Work Experience</Card.Title>
          <hr />
          <Row>
            <Col xs={12} md={2}>
              <div>
                <a href="https://manulife.ca/" target="_blank" rel="noopener noreferrer"><Image src={manulife} style={{width: '100px'}}/></a>
                <div><strong>Software Engineering Intern</strong></div>
                <div style={{color: 'gray', fontSize: '0.75em'}}>Sep - Dec 2019</div>
              </div>
            </Col>
            <Col xs={12} md={10}>
              <div>
                <ul>
                  <li>Architected and developed a full-stack application with MongoDB, ExpressJS, React, and NodeJS which would track scheduled outages for a variety of major services used by the Claims System Transformation team</li>
                  <li>Contributed to a health-check app in React and C# that monitors the performance of microservices through API endpoints, which served as a test result and visualization service to reduce debugging time from hours to seconds</li>
                  <li>Integrated email notifications to alert the responsible developers about the failed test run against their service</li>
                  <li>Leveraged the Jira API and internal SQL databases utilizing NodeJS to predict the estimated date of completion for multiple project versions through a linear regression model using story points and status assigned to each issue</li>
                  <li>Configured a CI/CD pipeline using Jenkins to compile and deploy the application source code to PCF</li>
                </ul>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={2}>
              <div>
                <a href="https://bioconnect.com/" target="_blank" rel="noopener noreferrer"><Image src={bioconnect} style={{width: '100px'}}/></a>
                <div><strong>QA Analyst</strong></div>
                <div style={{color: 'gray', fontSize: '0.75em'}}>Jan - Apr 2019</div>
              </div>
            </Col>
            <Col xs={12} md={10}>
              <div>
                <ul>
                  <li>Built automation scripts using Python to improve the test cycle by reducing the time spent on manual testing</li>
                  <li>Kickstarted the automation test suite for the BioConnect Android mobile app using the Appium-Python client</li>
                  <li>Significantly contributed to the Postman API validation test suite by adding over 75 end-to-end test cases, resulting in approximately a total of 1000 API requests with assertions written in JavaScript</li>
                  <li>Worked closely with Development and QA teams to plan and execute tests across mobile, server-client, RESTful APIs, SQL databases, and hardware devices to ensure it meets the specified requirements</li>
                  <li>Identified, analyzed, and implemented appropriate automation technology for respective platforms</li>
                </ul>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={2}>
              <div>
                <a href="https://pipersheath.com/" target="_blank" rel="noopener noreferrer"><Image src={pipers} style={{width: '100px'}}/></a>
                <div><strong>Back Shop</strong></div>
                <div style={{color: 'gray', fontSize: '0.75em'}}>Apr - Aug 2018</div>
              </div>
            </Col>
            <Col xs={12} md={10}>
              <div>
                <ul>
                  <li>Performed as a team player with co-workers and other departments to increase productivity</li>
                  <li>Greeted customers and provided them with clean, functional golf carts to boost customer satisfaction </li>
                  <li>Announced tee times through a microphone to assure time optimization and golfers tee off on schedule</li>
                </ul>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={2}>
              <div>
                <a href="http://www.elliottmachinery.com/" target="_blank" rel="noopener noreferrer"><Image src={elliott} style={{width: '100px'}}/></a>
                <div><strong>Inventory Clerk</strong></div>
                <div style={{color: 'gray', fontSize: '0.75em'}}>Nov - Dec 2017</div>
              </div>
            </Col>
            <Col xs={12} md={10}>
            <div>
              <ul>
                <li>Organized the amount of equipment and supplies available in storage with minimal supervision</li>
                <li>Maintained and compiled physical records of all attainable supplies to be computed in database</li>
              </ul>
            </div>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer style={{textAlign: 'center'}} className="text-muted">&copy; 2020 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}

export default Work;