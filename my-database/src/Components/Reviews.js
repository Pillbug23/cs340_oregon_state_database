import React, { useState } from "react";

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function Reviews() {
  const [form, setForm] = useState(0);

  return (
    <section>
      <Container fluid className="basic-info" id="student">
        <Container className="content">
          <button type="button" class="btn btn-dark" onClick={() => setForm(0)}>
            Add Review
          </button>
          <button type="button" class="btn btn-dark" onClick={() => setForm(1)}>
            Update Review
          </button>
          <button type="button" class="btn btn-dark" onClick={() => setForm(2)}>
            Delete Review
          </button>
          {form == 0 && (
            <>
              <h1>Add Review</h1>
              <Row>
                <Col md={7}>
                  <Form className="form-box">
                    <Form.Group className="mb-2">
                      <Form.Label> courseNumber </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Course Number"
                      />
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
                        On a scale of 1 to 10, where 10 is excellent and 1 is
                        bad, how would you rate this course?
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>courseReview</Form.Label>
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          id="Text-description"
                          placeholder="Review for this course..."
                          rows="3"
                        ></textarea>
                        <Form.Text style={{ color: "whitesmoke" }}>
                          How was this course beneficial in your job search.
                        </Form.Text>
                      </div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Add review
                    </Button>
                  </Form>
                </Col>
              </Row>
            </>
          )}
          {form == 1 && (
            <>
              <h1>Update Review</h1>
              <Row>
                <Col md={7}>
                  <Form className="form-box">
                    <Form.Group className="mb-2">
                      <Form.Label> courseNumber </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Course Number"
                      />
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
                        On a scale of 1 to 10, where 10 is excellent and 1 is
                        bad, how would you rate this course?
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>courseReview</Form.Label>
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          id="Text-description"
                          placeholder="Review for this course..."
                          rows="3"
                        ></textarea>
                        <Form.Text style={{ color: "whitesmoke" }}>
                          How was this course beneficial in your job search.
                        </Form.Text>
                      </div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Update review
                    </Button>
                  </Form>
                </Col>
              </Row>
            </>
          )}
          {form == 2 && (
            <>
              <h1>Delete Review</h1>
              <Row>
                <Col md={7}>
                  <Form className="form-box">
                    <Form.Group className="mb-2">
                      <Form.Label> reviewID </Form.Label>
                      <Form.Control type="text" placeholder="Enter Review ID" />
                      <Form.Text style={{ color: "whitesmoke" }}>
                        Please enter the reviewID you want deleted.
                      </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Delete review
                    </Button>
                  </Form>
                </Col>
              </Row>
            </>
          )}
          <Table striped bordered hover style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>reviewID#</th>
                <th>Course #</th>
                <th>Rating</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>340</td>
                <td>10</td>
                <td>"Allowed me to put valuable skills on my resume which led to a job"</td>
              </tr>
              <tr>
                <td>2</td>
                <td>290</td>
                <td>3</td>
                <td>"Skills outdated with current mark web frameworks"</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </section>
  );
}

export default Reviews;
