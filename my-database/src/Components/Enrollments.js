import React from 'react'

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function Enrollments() {
  return (
    <section>
      <Container fluid className="basic-info" id="student">
        <Container className="content">
        <h1>Add Enrollment </h1>
        <h6>Please select the course you are taking from the list of available courses.</h6>
          <Row>
            <Col md={7}>
              <Form className="form-box">
                <Form.Group className="mb-2">
                  <Form.Label> Student Name </Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Course </Form.Label>
                  <select class="form-control" id="unit">
                    <option>CS340: INTRODUCTION TO DATABASES</option>
                    <option>CS325: ANALYSIS OF ALGORITHMS</option>
                    <option>CS344: OPERATING SYSTEMS</option>
                    <option>CS261: DATA STRUCTURES</option>
                  </select>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add enrollment
                </Button>
              </Form>
            </Col>
          </Row>
          <h1>View Enrollment Info </h1>
          <Table striped bordered hover style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>enrollmentID#</th>
                <th>Student</th>
                <th>Course</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jane Cander</td>
                <td>
                DATA STRUCTURES
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="submit"
                  >
                    X
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sarah Williams</td>
                <td>
                  OPERATING SYSTEMS
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="submit"
                  >
                    X
                  </Button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bobby Lee</td>
                <td>
                ANALYSIS OF ALGORITHMS
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="submit"
                  >
                    X
                  </Button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Alice Johnson</td>
                <td>
                INTRODUCTION TO DATABASES
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="submit"
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
  )
}

export default Enrollments