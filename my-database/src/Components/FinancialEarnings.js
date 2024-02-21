import React, { useState } from "react";

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function FinancialEarnings() {
  const [form, setForm] = useState(null);

  return (
    <section>
      <Container fluid className="basic-info" id="student">
        <Container className="content">
          <button type="button" class="btn btn-dark" onClick={() => setForm(0)}>
            Add Financial Earning
          </button>
          {form == 0 && (
            <>
              <h1>Add Financial Earnings </h1>
              <h2>Salaries are automatically converted to USD.</h2>
              <Row>
                <Col md={7}>
                  <Form className="form-box">
                    <Form.Group className="mb-2">
                      <Form.Label>Prior Salary</Form.Label>
                      <Form.Control type="text" />
                      <Form.Text style={{ color: "whitesmoke" }}>
                        What was your previous salary before enrolling in OSU if
                        possible?
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Current Salary</Form.Label>
                      <Form.Control type="text" />
                      <Form.Text style={{ color: "whitesmoke" }}>
                        What is your new salary after graduating OSU if
                        possible?
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>Tuition Cost</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your total tuition cost..."
                      />
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>Student Total Loan</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your total taken loans..."
                      />
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>Misc. Expenses</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Any unrelated expenses..."
                      />
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>Loan Interest %</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>Student ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="The OSU issued Student ID"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Add
                    </Button>
                  </Form>
                </Col>
              </Row>
            </>
          )}
          {form == 1 && (
            <>
              <h1>Update Financial Earnings </h1>
              <h2>Salaries are automatically converted to USD.</h2>
              <Row>
                <Col md={7}>
                  <Form className="form-box">
                    <Form.Group className="mb-2">
                      <Form.Label>Prior Salary</Form.Label>
                      <Form.Control type="text" />
                      <Form.Text style={{ color: "whitesmoke" }}>
                        What was your previous salary before enrolling in OSU if
                        possible?
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Current Salary</Form.Label>
                      <Form.Control type="text" />
                      <Form.Text style={{ color: "whitesmoke" }}>
                        What is your new salary after graduating OSU if
                        possible?
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>Tuition Cost</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your total tuition cost..."
                      />
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>Student Total Loan</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your total taken loans..."
                      />
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>Misc. Expenses</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Any unrelated expenses..."
                      />
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>Loan Interest %</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-5">
                      <Form.Label>Student ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="The OSU issued Student ID"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Update
                    </Button>
                  </Form>
                </Col>
              </Row>
            </>
          )}
          {form == 2 && (
            <>
              <h1>Delete Financial Earnings </h1>
              <h2>Salaries are automatically converted to USD.</h2>
              <Row>
                <Col md={7}>
                  <Form className="form-box">
                    <Form.Group className="mb-2">
                      <Form.Label>Enter the earningsID</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Delete
                    </Button>
                  </Form>
                </Col>
              </Row>
            </>
          )}
          <Table striped bordered hover style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>earningsID#</th>
                <th>Previous Salary</th>
                <th>Tuition Cost</th>
                <th>Student Loans</th>
                <th>Misc. Expenses</th>
                <th>Loan Interest</th>
                <th>Student ID</th>
                <th>Current Salary</th>
                <th>Add</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>65000.00</td>
                <td>35000.00</td>
                <td>20000.00</td>
                <td>5000.00</td>
                <td>2.10</td>
                <td>573625</td>
                <td>75000.00</td>
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
                <td>55000.00</td>
                <td>20000.00</td>
                <td>35000.00</td>
                <td>6000.00</td>
                <td>3.00</td>
                <td>428162</td>
                <td>100000.00</td>
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
                <td>70000.00</td>
                <td>18000.00</td>
                <td>2000.00</td>
                <td>10000.00</td>
                <td>2.75</td>
                <td>283624</td>
                <td>120000.00</td>
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
                <td>100000.00</td>
                <td>42000.00</td>
                <td>18000.00</td>
                <td>15500.00</td>
                <td>1.90</td>
                <td>273623</td>
                <td>85000.00</td>
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

export default FinancialEarnings;
