import React from 'react'

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Instructors() {
  return (
    <section>
        
      <Container fluid className="basic-info" id="course">
        <Container className="content">
        <h1>Add an Oregon State instructor </h1>
          <Row>
            <Col md={7}>
              <Form className="form-box">
                <Form.Group className="mb-2">
                  <Form.Label>Instructor Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Instructor Email</Form.Label>
                  <Form.Control type="text" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control type="text" placeholder="Gender" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Qualifications</Form.Label>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="Text-description"
                      placeholder="List the qualifications of the instructor to store..."
                      rows="3"
                    ></textarea>
                  </div>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Years Taught</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Button variant="dark" type="submit">
                  Add instructor
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default Instructors