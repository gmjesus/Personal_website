import React, { useEffect } from 'react';
import '../App.css';
import './Contact.css';
import { Card, Container, Button, ButtonGroup, Row, Col, Form } from 'react-bootstrap';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Contact() {
  useEffect(() => {
    document.title = "Jesus Garcia Moreno - Contact";
  }, [])

  const data = {
    socials: [
      { title: "Email", link: "mailto:jf2garci@uwaterloo.ca", component: EmailIcon},
      { title: "LinkedIn", link: "https://www.linkedin.com/in/jesus-garciam/", component: LinkedInIcon},
      { title: "GitHub", link: "https://github.com/gmjesus", component: GitHubIcon}
    ]
  }

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
              {data.socials.map((social, key) => {
                  const SocialIcon = social.component;
                  return (
                    <Button key={key} title={social.title} variant="dark" href={social.link} target="_blank" rel="noopener noreferrer">
                      <SocialIcon fontSize="large"/>
                    </Button>
                  )
                })}
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
        <Card.Footer className="text-center text-muted">&copy; 2021 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}