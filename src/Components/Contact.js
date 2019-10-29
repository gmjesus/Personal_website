import React from 'react';
import '../App.css';
import { Card, Container, Button, ButtonGroup } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {
  return (
    <Container>
      <Card className="container text-center" id="contact">
        <Card.Body>
          <Card.Title as="h2">Contact Me!</Card.Title>
            <ButtonGroup size="lg">
              <Button variant="dark" href="mailto:jf2garci@edu.uwaterloo.ca"><EmailIcon fontSize="large"/></Button>
              <Button variant="dark" href="https://www.linkedin.com/in/jesus-garciam/"><LinkedInIcon fontSize="large"/></Button>
              <Button variant="dark" href="https://github.com/gmjesus"><GitHubIcon fontSize="large"/></Button>
            </ButtonGroup>
        </Card.Body>
        <Card.Footer style={{textAlign: 'center'}} className="text-muted">&copy; 2019 Jesus Garcia Moreno. All Rights Reserved.</Card.Footer>
      </Card>
    </Container>
  );
}

export default Contact;