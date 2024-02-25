import React from "react";

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function Companies() {
  return (
    <section>
      <Container fluid className="basic-info" id="student">
        <Container className="content">
          <h1>Add Company </h1>
          <Row>
            <Col md={7}>
              <Form className="form-box">
                <Form.Group className="mb-2">
                  <Form.Label> Company Name </Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Role</Form.Label>
                  <Form.Control type="text" placeholder="Role in company" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add company
                </Button>
              </Form>
            </Col>
          </Row>
          <Table striped bordered hover style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>companyID#</th>
                <th>Name</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Google</td>
                <td>
                Frontend Software Engineer
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Datadog</td>
                <td>
                  Systems Engineer
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>IBM</td>
                <td>
                  Software Tester
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Youtube</td>
                <td>
                  Security Engineer
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </section>
  );
}

export default Companies;
