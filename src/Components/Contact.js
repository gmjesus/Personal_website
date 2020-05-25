import React, { useEffect } from 'react';
import '../App.css';
import './Contact.css';
import { Card, Container, Button, ButtonGroup, Row, Col, Form } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {
  useEffect(() => {
    document.title = "Jesus Garcia Moreno - Contact";
  }, [])

  return (
    <Container>
      <Card id="contact">
        <Card.Body>
          <Card.Title as="h2">Contact</Card.Title>
          <hr />
          <Row className="grp">
            <Col xs={12} md={6}>
              <Card.Text>
                <span>Want to chat or learn more about me? Feel free to use my contact information on this page, or fill out the form below!</span>
              </Card.Text>
            </Col>
            <Col xs={12} md={6} className="text-center">
              <ButtonGroup size="lg" className="button-grp">
                <Button title="Email" variant="dark" href="mailto:jf2garci@uwaterloo.ca"><EmailIcon fontSize="large"/></Button>
                <Button title="LinkedIn" variant="dark" href="https://www.linkedin.com/in/jesus-garciam/"><LinkedInIcon fontSize="large"/></Button>
                <Button title="GitHub" variant="dark" href="https://github.com/gmjesus"><GitHubIcon fontSize="large"/></Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Form name="contact" method="post" >
            <input type="hidden" name="form-name" value="contact" />
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="Enter name" required/>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control name="message" as="textarea" rows="3" placeholder="Enter message" required/>
            </Form.Group>
            <Button variant="dark" type="submit">Send</Button>
          </Form>
        </Card.Body>
        <Card.Footer className="text-center text-muted">&copy; 2020 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}

export default Contact;