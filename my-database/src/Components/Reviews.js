import React, { useState } from "react";

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function Reviews() {
  const [form, setForm] = useState(null);

  return (
    <section>
      <Container fluid className="basic-info" id="student">
        <Container className="content">
          <button type="button" class="btn btn-dark" onClick={() => setForm(0)}>
            Add Review
          </button>
          {form == 0 && (
            <>
              <h1>Add Review</h1>
              <Row>
                <Col md={7}>
                  <Form className="form-box">
                    <Form.Group className="mb-2">
                      <Form.Label> Course Number </Form.Label>
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
                      <Form.Label>Course Review</Form.Label>
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
                <th>Course</th>
                <th>Course #</th>
                <th>Rating</th>
                <th>Review</th>
                <th>Add</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>INTRODUCTION TO DATABASES</td>
                <td>340</td>
                <td>9</td>
                <td>
                  This course provided valuable skills like querying with SQL
                  and database management that directly helped me secure an
                  internship.
                </td>
                <td>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => setForm(1)}
                  >
                    +
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="submit"
                    onClick={() => setForm(2)}
                  >
                    X
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>DATA STRUCTURES</td>
                <td>261</td>
                <td>9</td>
                <td>
                  While the course content was useful and beneficial to
                  understanding data structures, I wish there were more
                  career-oriented and practical projects.
                </td>
                <td>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => setForm(1)}
                  >
                    +
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="submit"
                    onClick={() => setForm(2)}
                  >
                    X
                  </Button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>ANALYSIS OF ALGORITHMS</td>
                <td>325</td>
                <td>4</td>
                <td>
                  The concepts taught in this course are directly helpful for
                  technical interviews.
                </td>
                <td>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => setForm(1)}
                  >
                    +
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="submit"
                    onClick={() => setForm(2)}
                  >
                    X
                  </Button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>OPERATING SYSTEMS</td>
                <td>344</td>
                <td>3</td>
                <td>
                  Good course overall, but I would have hoped there were more
                  practical projects to add to my resume.
                </td>
                <td>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => setForm(1)}
                  >
                    +
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="submit"
                    onClick={() => setForm(2)}
                  >
                    X
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </section>
  );
}

export default Reviews;
