import React, { useState } from "react";

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Reviews() {
  const [form, setForm] = useState(0);

  return (
    <section>
      <Container fluid className="basic-info" id="student">
        <Container className="content">
          <h1>Add a review</h1>
          <Row>
            <Col md={7}>
              <Form className="form-box">
                <Form.Group className="mb-2">
                  <Form.Label> courseID </Form.Label>
                  <Form.Control type="text" placeholder="Enter Course ID" />
                  <Form.Text style={{ color: "whitesmoke" }}>
                    Please enter the courseID you want to write a review for.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Rating (Out of 10)</Form.Label>
                  <select class="form-control" id="unit">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                  <Form.Text style={{ color: "whitesmoke" }}>
                    Please rate the course with 10 being excellent to 1 being
                    bad scale.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Review</Form.Label>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="Text-description"
                      placeholder="Review for this course..."
                      rows="3"
                    ></textarea>
                  </div>
                </Form.Group>
                <Button variant="dark" type="submit">
                  Add review
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Reviews;
