import React, { useEffect } from 'react';
import '../App.css';
import './Work.css';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

export default function Work() {
  useEffect(() => {
    document.title = "Jesus Garcia Moreno - Work";
  }, [])

  const data = [
    {
      title: "Software Engineering Intern",
      company: "PagerDuty",
      company_link: "https://www.pagerduty.com/",
      image: require("../Images/pagerduty.png"),
      dates: "Jan - Apr 2021",
      details: [
        "Developed and maintained distributed, fault‑tolerant Elixir/Phoenix microservices using Kafka as a pub‑sub and queue‑based messaging system, these services resided in a mission‑critical data pipeline that requires maximum uptime.",
        "Released new features in the Event Intelligence Product by following test‑driven development best practices.",
        "Provisioned and deployed scalable microservices to the cloud by creating new Kafka topics, CI/CD pipelines, database clusters through the use of Terraform, AWS, and Buildkite.",
        "Actively participated in the team on‑call rotation to identify, triage, investigate and fix critical operational issues across different Docker containerized microservices.",
        "Monitored and logged key consumer metrics using Datadog dashboards to improve team’s performance visibility."
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "PagerDuty",
      company_link: "https://www.pagerduty.com/",
      image: require("../Images/pagerduty.png"),
      dates: "May - Aug 2020",
      details: [
        "Performed several MySQL database migrations and worked on monolithic codebases written in Ruby and EmberJS.",
        "Debugged and fixed customer‑reported bugs by investigating Sumo Logic logs and utilizing internal tools.",
        "Created and executed backfill scripts to populate Amazon S3 buckets in staging and production environments.",
        "Enhanced existing postmortem feature with Elixir and EmberJS to allow multiple templates, rich text editing, and embedded images, winning 1st place in the Intern Hackathon by presenting the solution to company executives."
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Manulife",
      company_link: "https://manulife.ca/",
      image: require("../Images/manulife.png"),
      dates: "Sep - Dec 2019",
      details: [
        "Architected and developed a full-stack application with MongoDB, ExpressJS, React, and NodeJS which would track scheduled outages for a variety of major services used by the Claims System Transformation team.",
        "Contributed to a health-check app in React and C# that monitors the performance of microservices through API endpoints, which served as a test result and visualization service to reduce debugging time from hours to seconds.",
        "Integrated email notifications to alert the responsible developers about the failed test run against their service.",
        "Leveraged the Jira API and internal SQL databases utilizing NodeJS to predict the estimated date of completion for multiple project versions through a linear regression model using story points and status assigned to each issue.",
        "Configured a CI/CD pipeline using Jenkins to compile and deploy the application source code to PCF."
      ]
    },
    {
      title: "QA Analyst",
      company: "BioConnect",
      company_link: "https://bioconnect.com/",
      image: require("../Images/bioconnect.png"),
      dates: "Jan - Apr 2019",
      details: [
        "Built automation scripts using Python to improve the test cycle by reducing the time spent on manual testing.",
        "Kickstarted the automation test suite for the BioConnect Android mobile app using the Appium-Python client.",
        "Significantly contributed to the Postman API validation test suite by adding over 75 end-to-end test cases, resulting in approximately a total of 1000 API requests with assertions written in JavaScript.",
        "Worked closely with Development and QA teams to plan and execute tests across mobile, server-client, RESTful APIs, SQL databases, and hardware devices to ensure it meets the specified requirements.",
        "Identified, analyzed, and implemented appropriate automation technology for respective platforms."
      ]
    },
    {
      title: "Back Shop",
      company: "Piper's Heath Golf Club",
      company_link: "https://pipersheath.com/",
      image: require("../Images/pipers.jpg"),
      dates: "Apr - Aug 2018",
      details: [
        "Performed as a team player with co-workers and other departments to increase productivity.",
        "Greeted customers and provided them with clean, functional golf carts to boost customer satisfaction.",
        "Announced tee times through a microphone to assure time optimization and golfers tee off on schedule."
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
                        {item.details.map((detail, key) => {
                          return(
                            <li key={key}>{detail}</li>
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
        <Card.Footer className="text-center text-muted">&copy; 2021 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}