import React, { useState } from "react";

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function Student() {
  const [form, setForm] = useState(null);
  return (
    <section>
      <Container fluid className="basic-info" id="student">
        <Container className="content">
          <button type="button" class="btn btn-dark" onClick={() => setForm(0)}>
            Add Student
          </button>
          {form == 0 && (
            <>
              <h1>Add Student </h1>
              <Row>
                <Col md={7}>
                  <Form className="form-box">
                    <Form.Group className="mb-2">
                      <Form.Label> studentID </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Student ID"
                      />
                      <Form.Text style={{ color: "whitesmoke" }}>
                        Please enter the student's 6 digit ID listed on their
                        OSU portal.
                      </Form.Text>
                    </Form.Group>
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
                      <Form.Label>Current Company</Form.Label>
                      <Form.Control type="text" placeholder="Company" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Previous Major</Form.Label>
                      <Form.Control type="text" placeholder="Major" />
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>Graduated?</Form.Label>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioGraduation"
                        />
                        <label
                          class="form-check-label"
                          for="flexRadioGraduation"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioGraduation"
                        />
                        <label
                          class="form-check-label"
                          for="flexRadioGraduation"
                        >
                          No
                        </label>
                      </div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Add student
                    </Button>
                  </Form>
                </Col>
              </Row>
            </>
          )}
          {form == 1 && (
            <>
              <h1>Update Student </h1>
              <Row>
                <Col md={7}>
                  <Form className="form-box">
                    <Form.Group className="mb-2">
                      <Form.Label> studentID </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Student ID"
                      />
                    </Form.Group>
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
                      <Form.Label>Current Company</Form.Label>
                      <Form.Control type="text" placeholder="Company" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Previous Major</Form.Label>
                      <Form.Control type="text" placeholder="Major" />
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>Graduated?</Form.Label>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioGraduation"
                        />
                        <label
                          class="form-check-label"
                          for="flexRadioGraduation"
                        >
                          Yes
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioGraduation"
                        />
                        <label
                          class="form-check-label"
                          for="flexRadioGraduation"
                        >
                          No
                        </label>
                      </div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Update student
                    </Button>
                  </Form>
                </Col>
              </Row>
            </>
          )}
          {form == 2 && (
            <>
              <h1>Delete Student </h1>
              <Row>
                <Col md={7}>
                  <Form className="form-box">
                    <Form.Group className="mb-5">
                      <Form.Label> studentID </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Student ID"
                      />
                      <Form.Text style={{ color: "whitesmoke" }}>
                        Please enter the student's ID you want to delete
                      </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Delete student
                    </Button>
                  </Form>
                </Col>
              </Row>
            </>
          )}
          <Table striped bordered hover style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>studentID#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Company</th>
                <th>Previous Major</th>
                <th>Graduated?</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>273623</td>
                <td>Jane Cander</td>
                <td>j23can@oregonstate.edu</td>
                <td>Female</td>
                <td>Youtube</td>
                <td>Biology</td>
                <td>0</td>
                <td>
                  <Button variant="primary" type="submit" onClick={()=> setForm(1)}>
                    +
                  </Button>
                </td>
                <td>
                  <Button variant="danger" type="submit" onClick={()=> setForm(2)}>
                    X
                  </Button>
                </td>
              </tr>
              <tr>
                <td>283624</td>
                <td>Bobby Lee</td>
                <td>boblee@oregonstate.edu</td>
                <td>Male</td>
                <td>IBM</td>
                <td>Mathematics</td>
                <td>0</td>
                <td>
                  <Button variant="primary" type="submit" onClick={()=> setForm(1)}>
                    +
                  </Button>
                </td>
                <td>
                  <Button variant="danger" type="submit" onClick={()=> setForm(2)}>
                    X
                  </Button>
                </td>
              </tr>
              <tr>
                <td>428162</td>
                <td>Sarah Williams</td>
                <td>sarahjwilliam@oregonstate.edu</td>
                <td>Female</td>
                <td>Google</td>
                <td>Chemical Engineering</td>
                <td>1</td>
                <td>
                  <Button variant="primary" type="submit" onClick={()=> setForm(1)}>
                    +
                  </Button>
                </td>
                <td>
                  <Button variant="danger" type="submit" onClick={()=> setForm(2)}>
                    X
                  </Button>
                </td>
              </tr>
              <tr>
                <td>573625</td>
                <td>Alice Johnson</td>
                <td>alicej@oregonstate.edu</td>
                <td>Intersex</td>
                <td>Datadog</td>
                <td>Chemistry</td>
                <td>1</td>
                <td>
                  <Button variant="primary" type="submit" onClick={()=> setForm(1)}>
                    +
                  </Button>
                </td>
                <td>
                  <Button variant="danger" type="submit" onClick={()=> setForm(2)}>
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

export default Student;
