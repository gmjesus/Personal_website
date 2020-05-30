import React, { useEffect } from 'react';
import '../App.css';
import './Education.css';
import { Card, Container, ListGroup } from 'react-bootstrap';
import photo from '../Images/uwaterloo.png'

function Education() {
  useEffect(() => {
    document.title = "Jesus Garcia Moreno - Education";
  }, [])

  const data = {
    courses_link: "http://www.ucalendar.uwaterloo.ca/2021/COURSE/course-ECE.html",
    courses: [
      { subject: "ECE", number: 108, title: "Discrete Mathematics and Logic 1"},
      { subject: "ECE", number: 124, title: "Digital Circuits and Systems"},
      { subject: "ECE", number: 150, title: "Fundamentals of Programming"},
      { subject: "ECE", number: 222, title: "Digital Computers"},
      { subject: "ECE", number: 250, title: "Algorithms and Data Structures"}
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
          <div>Bachelor of Applied Science - BASc, 2018-2023</div>
          <div>Program: Computer Engineering, Honours, Co-op</div>
          <br />
          <div>Listed below are some of my favourite courses I completed during my undergrad:</div>
          <ListGroup horizontal='lg' className="my-2">
            {data.courses.map((course, key) => {
              return (
                <ListGroup.Item key={key} action href={data.courses_link + "#" + course.subject + course.number} target="_blank" rel="noopener noreferrer">
                  {course.subject} {course.number} - {course.title}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Card.Body>
        <Card.Footer className="text-center text-muted">&copy; 2020 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}

export default Education;