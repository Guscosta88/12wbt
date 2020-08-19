import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Container>
            <Jumbotron>
                <h1>How long have you been waiting? It's time to do something for YOU!</h1>
                <h3>12 weeks will change your life.</h3>
            </Jumbotron>
            <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/newhp-header.jpg" className="header-pic" />
            <h1>NEW BLOKES ONLY PROGRAM HAS LAUNCHED!</h1>
            <h3>I've partnered with master strength & conditioning expert,  Todd Liubinskas, to develop an online program like no other - created for blokes, by blokes.</h3>
            <Button variant="primary">Check it out NOW</Button>
            </Col>
            </Row>

            </Container>
        )
    }
}

export default Home;