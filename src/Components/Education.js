import React, { useEffect } from 'react';
import '../App.css';
import './Education.css';
import { Card, Container, ListGroup } from 'react-bootstrap';
import photo from '../Images/uwaterloo.png'

export default function Education() {
  useEffect(() => {
    document.title = "Jesus Garcia Moreno - Education";
  }, [])

  const data = {
    ece_courses_link: "http://www.ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",
    courses: [
      { subject: "ECE", number: 250, title: "Algorithms and Data Structures"},
      { subject: "ECE", number: 252, title: "Systems Programming and Concurrency"},
      { subject: "ECE", number: 356, title: "Database Systems"},
      { subject: "ECE", number: 454, title: "Distributed Computing"}
    ]
  }

  return (
    <Container>
      <Card id="education">
        <Card.Body>
          <Card.Title as="h2">Education</Card.Title>
          <hr />
          <Card.Img className="image" src={photo} title="University of Waterloo" alt="University of Waterloo"/>
          <Card.Subtitle as="h4">Univeristy of Waterloo - Waterloo, ON, Canada</Card.Subtitle>
          <div>Degree: BASc - Bachelor of Applied Science</div>
          <div>Program: <a href="https://uwaterloo.ca/electrical-computer-engineering/" rel="noopener noreferrer" target="_blank">Computer Engineering, Co-op</a></div>
          <div>Expected Graduation Date: May 2023</div>
          <br />
          <div>Listed below are some of my favourite courses I completed during my undergrad:</div>
          <ListGroup horizontal='lg' className="my-2">
            {data.courses.map((course, key) => {
              return (
                <ListGroup.Item key={key} action href={data.ece_courses_link + "#" + course.subject + course.number} target="_blank" rel="noopener noreferrer">
                  {course.subject} {course.number} - {course.title}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Card.Body>
        <Card.Footer className="text-center text-muted">&copy; 2021 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}