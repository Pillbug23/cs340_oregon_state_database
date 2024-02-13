import React from 'react'

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Homepage() {
  return (
    <section>
    <Container fluid className="homepage-basic-info" id="home">
        <Container className="homepage-content">
            <Row>
                <Col md={7} >
                    <p className="homepage-introduction">
                        Oregon State University's Database Tracker
                        system records student information for
                        400 current post baccalaureate students enrolled 
                        in our program. Please view the following tabs to create, read, 
                        update and delete information.
                    </p>
                </Col>
            </Row>
        </Container>
    </Container>
    </section>
  )
}

export default Homepage