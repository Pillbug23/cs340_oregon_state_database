import React from "react";

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function Courses() {
  return (
    <section>
        
      <Container fluid className="basic-info" id="course">
        <Container className="content">
        <h1>Add Course </h1>
          <Row>
            <Col md={7}>
              <Form className="form-box">
                <Form.Group className="mb-2">
                  <Form.Label> Course Number </Form.Label>
                  <Form.Control type="text" placeholder="Enter Course Number ex.340" />
                  <Form.Text style={{ color: "whitesmoke" }}>
                    Please enter the three digit course number.
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
                <Form.Group className="mb-2">
                  <Form.Label>Unit</Form.Label>
                  <select class="form-control" id="unit">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Instructor Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add course
                </Button>
              </Form>
            </Col>
          </Row>
          <Table striped bordered hover style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>courseID#</th>
                <th>Course#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Units</th>
                <th>Instructor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>261</td>
                <td>DATA STRUCTURES</td>
                <td>Abstract data types, dynamic arrays, linked lists, trees and graphs, binary search trees, hash tables, storage management, complexity analysis of data structures.
                </td>
                <td>4</td>
                <td>Randy Scovil</td>
              </tr>
              <tr>
                <td>2</td>
                <td>325</td>
                <td>ANALYSIS OF ALGORITHMS</td>
                <td>Recurrence relations, combinatorics, recursive algorithms, proofs of correctness.</td>
                <td>4</td>
                <td>Doshna Reddy</td>
              </tr>
              <tr>
                <td>3</td>
                <td>340</td>
                <td>INTRODUCTION TO DATABASES</td>
                <td>Design and implementation of relational databases, including data modeling with ER or UML, diagrams, relational schema, SQL queries, relational algebra, user interfaces, and administration.</td>
                <td>4</td>
                <td>Michael Curry</td>
              </tr>
              <tr>
                <td>4</td>
                <td>344</td>
                <td>OPERATING SYSTEMS</td>
                <td>Introduction to operating systems using UNIX as the case study. System calls and utilities, fundamentals of processes and interprocess communication.</td>
                <td>4</td>
                <td>Jonathan Lee</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </section>
  );
}

export default Courses;
