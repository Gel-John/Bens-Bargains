import React from "react";
import { Row, Col, Container, Carousel } from "react-materialize";

const About = () =>
  <div>
    {/* <h1>Ben's Bargains</h1>
    <h2>Pick something up!</h2> */}
    <Container style={{ marginTop: 30 }}>
      <Carousel options={{ fullWidth: true }} 
                images={[
        'https://lorempixel.com/800/400/food/1',
        'https://lorempixel.com/800/400/food/2',
        'https://lorempixel.com/800/400/food/3',
        'https://lorempixel.com/800/400/food/4',
        'https://lorempixel.com/800/400/food/5'
      ]} />
      <Row>
        <Col size="md-12">
          <h1>Welcome to Ben's Bargain Bin!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
        </Col>
      </Row>
    </Container>
  </div>;

export default About;
