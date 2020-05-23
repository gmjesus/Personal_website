import React, { useEffect, useState } from 'react';
import '../App.css';
import './Contact.css';
import { Card, Container, Button, ButtonGroup, Row, Col, Form, Alert } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = "Jesus Garcia Moreno - Contact";
  }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.target.reset();
    setShow(true);
  }

  return (
    <Container>
      <Card id="contact">
        <Card.Body>
          <Card.Title as="h2">Contact</Card.Title>
          <hr />
          <Row>
            <Col xs={12} md={6}>
              <Card.Text className="text-card">
                <span>Want to chat or learn more about me? Feel free to use my contact information on this page, or fill out the form below!</span>
              </Card.Text>
            </Col>
            <Col xs={12} md={6} className="text-center">
              <ButtonGroup size="lg">
                <Button title="Email" variant="dark" href="mailto:jf2garci@uwaterloo.ca"><EmailIcon fontSize="large"/></Button>
                <Button title="LinkedIn" variant="dark" href="https://www.linkedin.com/in/jesus-garciam/"><LinkedInIcon fontSize="large"/></Button>
                <Button title="GitHub" variant="dark" href="https://github.com/gmjesus"><GitHubIcon fontSize="large"/></Button>
              </ButtonGroup>
            </Col>
          </Row>
          <br />
          { show
            ? <Alert variant="success" onClose={() => setShow(false)} dismissible>
                Message successfully sent!
              </Alert>
            : ""
          }
          <Form name="contact-form" data-netlify="true" onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" required/>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder="Enter message" required/>
            </Form.Group>
            <Button variant="dark" type="submit">Submit</Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-center text-muted">&copy; 2020 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}

export default Contact;