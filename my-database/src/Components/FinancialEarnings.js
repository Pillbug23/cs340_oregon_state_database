import React,{useState} from 'react'

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
            
           
            <Table striped bordered hover style={{marginTop: "20px"}}>
              <thead>
                <tr>
                  <th>earningsID#</th>
                  <th>Tuition Cost</th>
                  <th>Student Loans</th>
                  <th>Misc. Expenses</th>
                  <th>Loan Interest</th>
                  <th>Current Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>$23000</td>
                  <td>$24000</td>
                  <td>$10000</td>
                  <td>2.3%</td>
                  <td>75000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>jacobthecob@oregonstate.edu</td>
                  <td>Intersex</td>
                  <td>Chemistry</td>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Container>
      </section>
    );
}

export default FinancialEarnings