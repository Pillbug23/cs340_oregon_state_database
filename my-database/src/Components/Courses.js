import React from "react";

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Courses() {
  return (
    <section>
        
      <Container fluid className="basic-info" id="course">
        <Container className="content">
        <h1>Add an Oregon State course </h1>
          <Row>
            <Col md={7}>
              <Form className="form-box">
                <Form.Group className="mb-2">
                  <Form.Label> courseID </Form.Label>
                  <Form.Control type="text" placeholder="Enter Course ID" />
                  <Form.Text style={{ color: "whitesmoke" }}>
                    Please enter the three digit course ID.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Description</Form.Label>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="Text-description"
                      placeholder="Enter a simple description..."
                      rows="3"
                    ></textarea>
                  </div>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Units</Form.Label>
                  <select class="form-control" id="unit">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </Form.Group>
                <Button variant="dark" type="submit">
                  Add course
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Courses;
