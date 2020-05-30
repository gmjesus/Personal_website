import React, { useEffect } from 'react';
import '../App.css';
import { Card, Container } from 'react-bootstrap';

export default function NotFound() {
  useEffect(() => {
    document.title = "Jesus Garcia Moreno - Not Found";
  }, [])

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title as="h2">Page Not Found</Card.Title>
          <hr />
        </Card.Body>
      </Card>
    </Container>
  );
}