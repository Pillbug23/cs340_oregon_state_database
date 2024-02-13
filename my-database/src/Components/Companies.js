import React from 'react'

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Companies() {
  return (
    <section>
      <Container fluid className="basic-info" id="student">
        <Container className="content">
        <h1>Add a company </h1>
          <Row>
            <Col md={7}>
              <Form className="form-box">
                <Form.Group className="mb-2">
                  <Form.Label> Company Name </Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Role</Form.Label>
                  <Form.Control type="text" placeholder="Role in company" />
                </Form.Group>
                <Button variant="dark" type="submit">
                  Add company
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}

export default Companies