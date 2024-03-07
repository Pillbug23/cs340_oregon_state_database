import React, { useState, useEffect } from "react";

/*Import components from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function Courses() {
  // The form state which decides which form is filled out.
  // For example clicking on add makes form 1, update makes form 2.
  const [form, setForm] = useState(false);
  // The Course data which is pulled for the backend 
  const [course, setCourseData] = useState([]);
  const [instructors, setInstructorData] = useState([]);
  

  // Side effect for loading component after each render
  // Data is loaded once on load 
  useEffect(() => {
    fetch('http://flip4.engr.oregonstate.edu:4283/course')
      .then(response => response.json())
      .then(data => setCourseData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Form data which is a useState object
  // Note some fields are set to the default values if not selected
  const [formData, setFormData] = useState({
    courseNumber: '',
    courseName: '',
    description: '',
    courseUnits: '',
    instructorID: '',
  });


  // handleChange arrow function called everytime a field is filled out
  // Destructure e.target which has name,target
  // update state with the previous formData object and new attribute:value pair
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  // Check if any of the fields are empty
  const checkEmpty = () => {
    for (const field in formData) {
      if (formData[field] === '') {
        alert('One or more of your fields are still empty. Please fill it out.')
        return
      }
    }
  }

  const findInstructor = (instructorID) => {
    // Assuming instructors is an array of instructor objects
    const foundInstructor = instructors.find(instructor => instructor.instructorID === instructorID);
    return foundInstructor ? foundInstructor.instructorName : "Instructor could not be located";
  }
  

 
  // On submit prevent webpage reload and check conditions
  const handleSubmit = async (e) => {
    e.preventDefault();
    checkEmpty()
    try {
      const response = await fetch('http://flip4.engr.oregonstate.edu:4283/course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Handle success
        console.log('Course added successfully');
        fetch('http://flip4.engr.oregonstate.edu:4283/course') 
          .then(response => response.json())
          .then(data => setCourseData(data))
          .catch(error => console.error('Error fetching data:', error));
      }
    } catch (error) {
      console.error('Could not add Course', error);
    }
  };

  const deleteCourse = async (courseID) => {
    try {
      const response = await fetch(`http://flip4.engr.oregonstate.edu:4283/${courseID}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Course deleted successfully');
        fetch('http://flip4.engr.oregonstate.edu:4283/course') 
          .then(response => response.json())
          .then(data => setCourseData(data))
          .catch(error => console.error('Error fetching data:', error));
      } 
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };
  


return (
  <section>
    <Container fluid className="basic-info" id="student">
      <Container className="content">
        <button type="button" class="btn btn-dark" onClick={() => setForm(!form)}>
          Add Course
        </button>
        {form && (
          <>
            <h1>Add Course </h1>
            <Row>
            <Col md={7}>
            <Form className="form-box" onSubmit={handleSubmit}>
                <Form.Group className="mb-2" style={{ marginTop: "20px" }}>
                  <Form.Label> Course Number </Form.Label>
                  <Form.Control type="text" placeholder="Enter Course Number ex.340" 
                   name="courseNumber" 
                   value={formData.courseNumber}
                   onChange={handleChange}
                   />
                  <Form.Text style={{ color: "whitesmoke" }}>
                    Please enter the three digit course number.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-2">
                          <Form.Label>Course Name</Form.Label>
                          <Form.Control type="text" placeholder="Name" name="courseName"
                            value={formData.name}
                            onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-5">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3"
                        placeholder="Enter a simple description..." 
                        name="description"
                        value={formData.description}
                        onChange={handleChange} 
                        />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Unit</Form.Label>
                  <select class="form-control" id="courseUnits"
                  name = "courseUnits"
                  placeholder="Name"
                  value={formData.courseUnits}
                  onChange={handleChange}  
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Instructor Full Name</Form.Label>
                  <Form.Control type="text" 
                  placeholder="Name"
                  value={formData.instructorID}
                  onChange={handleChange}
                  name ="instructorID"  
                  />
                </Form.Group>
                {/* <Form.Group className="mb-5">
                  <Form.Label>Instructor Full Name</Form.Label>
                  <Form.Control 
                  as="select"
                  value={formData.instructorID}
                  onChange={handleChange}
                  name="instructorID">
                  <option>Choose Instructor</option>
                  {instructors.map(instructor => (
                          <option key={instructor.instructorID} value={instructor.instructorID}>
                            {instructor.instructorID}:{instructor.instructorName}
                          </option>
                  ))}
                </Form.Control>
                </Form.Group> */}
                <Button variant="primary" type="submit">
                  Add course
                </Button>
              </Form>
            </Col>
          </Row>
          </>
        )}
        <Table striped bordered hover style={{ marginTop: "20px" }}>
        <thead>
              <tr>
                <th>courseID#</th>
                <th>Course#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Units</th>
                <th>Instructor</th>
                <th>Delete</th>
              </tr>
          </thead>
          <tbody>
              {course.map(course => (<tr>
                <td>{course.courseID}</td>
                <td>{course.courseNumber}</td>
                <td>{course.courseName}</td>
                <td>{course.description}</td>
                <td>{course.courseUnits}</td>
                <td>{findInstructor(course.instructorID)}</td>
                <td>
                  <Button variant="danger" type="submit" onClick={() => deleteCourse(course.courseID)}>
                    X
                  </Button>
                </td>
              </tr>))}
            </tbody>
        </Table>
      </Container>
    </Container>
  </section>
);
}

export default Courses;
