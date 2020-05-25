import React, { useEffect } from 'react';
import '../App.css';
import './Work.css';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

function Work() {
  useEffect(() => {
    document.title = "Jesus Garcia Moreno - Work";
  }, [])

  const data = [
    {
      title: "Software Engineering Intern",
      company: "PagerDuty",
      company_link: "https://www.pagerduty.com/",
      image: require("../Images/pagerduty.png"),
      dates: "May - Aug 2020",
      details: [
        "To be determined..."
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Manulife",
      company_link: "https://manulife.ca/",
      image: require("../Images/manulife.png"),
      dates: "Sep - Dec 2019",
      details: [
        "Architected and developed a full-stack application with MongoDB, ExpressJS, React, and NodeJS which would track scheduled outages for a variety of major services used by the Claims System Transformation team",
        "Contributed to a health-check app in React and C# that monitors the performance of microservices through API endpoints, which served as a test result and visualization service to reduce debugging time from hours to seconds",
        "Integrated email notifications to alert the responsible developers about the failed test run against their service",
        "Leveraged the Jira API and internal SQL databases utilizing NodeJS to predict the estimated date of completion for multiple project versions through a linear regression model using story points and status assigned to each issue",
        "Configured a CI/CD pipeline using Jenkins to compile and deploy the application source code to PCF"
      ]
    },
    {
      title: "QA Analyst",
      company: "BioConnect",
      company_link: "https://bioconnect.com/",
      image: require("../Images/bioconnect.png"),
      dates: "Jan - Apr 2019",
      details: [
        "Built automation scripts using Python to improve the test cycle by reducing the time spent on manual testing",
        "Kickstarted the automation test suite for the BioConnect Android mobile app using the Appium-Python client",
        "Significantly contributed to the Postman API validation test suite by adding over 75 end-to-end test cases, resulting in approximately a total of 1000 API requests with assertions written in JavaScript",
        "Worked closely with Development and QA teams to plan and execute tests across mobile, server-client, RESTful APIs, SQL databases, and hardware devices to ensure it meets the specified requirements",
        "Identified, analyzed, and implemented appropriate automation technology for respective platforms"
      ]
    },
    {
      title: "Back Shop",
      company: "Piper's Heath Golf Club",
      company_link: "https://pipersheath.com/",
      image: require("../Images/pipers.jpg"),
      dates: "Apr - Aug 2018",
      details: [
        "Performed as a team player with co-workers and other departments to increase productivity",
        "Greeted customers and provided them with clean, functional golf carts to boost customer satisfaction",
        "Announced tee times through a microphone to assure time optimization and golfers tee off on schedule"
      ]
    },
    {
      title: "Inventory Clerk",      
      company: "Elliott Machinery",
      company_link: "http://www.elliottmachinery.com/",
      image: require("../Images/elliott.png"),
      dates: "Nov - Dec 2017",
      details: [
        "Organized the amount of equipment and supplies available in storage with minimal supervision",
        "Maintained and compiled physical records of all attainable supplies to be computed in database"
      ]
    }
  ]

  return (
    <Container>
      <Card id="work">
        <Card.Body>
          <Card.Title as="h2">Work Experience</Card.Title>
          {data.map((item, key) => {
            return (
              <React.Fragment key={key}>
                <hr />
                <Row >
                  <Col xs={12} md={2}>
                    <div>
                      <a href={item.company_link} title={item.company} target="_blank" rel="noopener noreferrer"><Image src={item.image} style={{width: '100px'}}/></a>
                      <div><strong>{item.title}</strong></div>
                      <div className="text-date">{item.dates}</div>
                    </div>
                  </Col>
                  <Col xs={12} md={10}>
                    <div>
                      <ul>
                        {item.details.map((detail, detail_key) => {
                          return(
                            <li key={detail_key}>{detail}</li>
                          )
                        })}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </React.Fragment>
            )
          })}
        </Card.Body>
        <Card.Footer className="text-center text-muted">&copy; 2020 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}

export default Work;