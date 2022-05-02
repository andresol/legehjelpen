import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { mdiHead } from '@mdi/js';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';

import './App.css';
import { Row } from 'react-bootstrap';

const App = () => (
  <MemoryRouter>
    <Container className="p-3">
      <h1>Legehjelpen</h1>
      <h2>Velkommen til legehjelpen! For raskest mulig hjelp følg denne guiden</h2>
      <Row>
       <Container className="p-3">
        <Row>
          <h3>Hvor har du vondt?</h3>
        </Row>
        </Container>
    </Row>
    <Row>
      <Col>
          <Image thumbnail="true" src="https://cdn-icons-png.flaticon.com/512/158/158766.png"></Image>
      </Col>
      <Col>
          <Image thumbnail="true" src="https://cdn-icons-png.flaticon.com/512/30/30730.png"></Image>
      </Col>
    </Row>
    </Container>
  </MemoryRouter>
);

export default App;
