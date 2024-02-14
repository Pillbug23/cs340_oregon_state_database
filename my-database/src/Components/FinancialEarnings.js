import React, { useState } from "react";

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function FinancialEarnings() {
  return (
    <section>
      <Container fluid className="basic-info" id="student">
        <Container className="content">
          <h1>Add Financial Earnings </h1>
          <Row>
            <Col md={7}>
              <Form className="form-box">
                <Form.Group className="mb-2">
                  <Form.Label>priorSalary</Form.Label>
                  <Form.Control type="text" />
                  <Form.Text style={{ color: "whitesmoke" }}>
                    What was your previous salary before enrolling in OSU if
                    possible?
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>currentSalary</Form.Label>
                  <Form.Control type="text" />
                  <Form.Text style={{ color: "whitesmoke" }}>
                    What is your new salary after graduating OSU if possible?
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>tuitionCost</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your total tuition cost..."
                  />
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>studentLoan</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your total taken loans..."
                  />
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>miscExpense</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Any unrelated expenses..."
                  />
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>loanInterest</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add
                </Button>
              </Form>
            </Col>
          </Row>

          <Table striped bordered hover style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>earningsID#</th>
                <th>Previous Salary</th>
                <th>Current Salary</th>
                <th>Tuition Cost</th>
                <th>Student Loans</th>
                <th>Misc. Expenses</th>
                <th>Loan Interest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>$23000</td>
                <td>$223000</td>
                <td>$24000</td>
                <td>$10000</td>
                <td>$7500</td>
                <td>2.3%</td>
              </tr>
              <tr>
                <td>2</td>
                <td>$113000</td>
                <td>$90000</td>
                <td>$31000</td>
                <td>$1000</td>
                <td>$3500</td>
                <td>2.8%</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </section>
  );
}

export default FinancialEarnings;
