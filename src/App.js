import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
 return (
    
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Node Modules</Accordion.Header>
        <Accordion.Body>
            <ListGroup>
                <ListGroup.Item>.bin</ListGroup.Item>
                <ListGroup.Item>.cache</ListGroup.Item>
                <ListGroup.Item>@aashutoshrathi</ListGroup.Item>
                <ListGroup.Item>@alloc</ListGroup.Item>
                <ListGroup.Item>@babel</ListGroup.Item>
            </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Public</Accordion.Header>
        <Accordion.Body>
            <ListGroup>
                <ListGroup.Item>favicon</ListGroup.Item>
                <ListGroup.Item>index.html</ListGroup.Item>
                <ListGroup.Item>logo192.png</ListGroup.Item>
                <ListGroup.Item>manifest.json</ListGroup.Item>
                <ListGroup.Item>robots.txt</ListGroup.Item>
            </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Src</Accordion.Header>
        <Accordion.Body>
            <ListGroup>
                <ListGroup.Item>App.js</ListGroup.Item>
                <ListGroup.Item>index.js</ListGroup.Item>
                <ListGroup.Item>reportWebVitals.js</ListGroup.Item>
            </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
 );
}

export default App;