import React from "react";

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function Instructors() {
  return (
    <section>
      <Container fluid className="basic-info" id="course">
        <Container className="content">
          <h1>Add Instructor </h1>
          <Row>
            <Col md={7}>
              <Form className="form-box">
                <Form.Group className="mb-2">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Gender</Form.Label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioGender"
                    />
                    <label class="form-check-label" for="flexRadioGender">
                      Male
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioGender"
                    />
                    <label class="form-check-label" for="flexRadioGender">
                      Female
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioGender"
                    />
                    <label class="form-check-label" for="flexRadioGender">
                      Intersex
                    </label>
                  </div>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Qualifications</Form.Label>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="Text-description"
                      placeholder="List the academic qualifications of the instructor..."
                      rows="3"
                    ></textarea>
                  </div>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Years Taught</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add instructor
                </Button>
              </Form>
            </Col>
          </Row>
          <Table striped bordered hover style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>instructorID#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Qualifications</th>
                <th>Years Taught</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Michael Curry</td>
                <td>m.curry@oregonstate.edu</td>
                <td>Male</td>
                <td>Ph.D. in Computer Science, 10+ years of teaching experience at Oregon State (Curry, n.d.)</td>
                <td>4</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Randy Scovil</td>
                <td>r.scovil@oregonstate.edu</td>
                <td>Male</td>
                <td>Master's in Computer Science, Worked as a SWE at Google for 2 years (Scovil, n.d.)</td>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Doshna Reddy</td>
                <td>d.reddy@oregonstate.edu</td>
                <td>Female</td>
                <td>Ph.D. in Computer Science, Six Years experience as a software engineer
(Reddy, n.d.)</td>
                <td>8</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Jonathan Lee</td>
                <td>j.lee@oregonstate.edu</td>
                <td>Male</td>
                <td>Taught Operating Systems at UC San Diego for 6 years, co-wrote 2 software engineering papers</td>
                <td>6</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </section>
  );
}

export default Instructors;
