/*Import basic react hooks and router */
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Component webpages to import */
import Homepage from './Components/Homepage.js';
import Navigation from './Components/Navigation.js';
import Students from './Components/Students.js';
import Courses from './Components/Courses.js';
import Instructors from "./Components/Instructors.js"
import Companies from "./Components/Companies.js"
import Reviews from "./Components/Reviews.js"
import FinancialEarnings from "./Components/FinancialEarnings.js"

/*Import bootstrap styles */
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path = "/" element= {<Homepage />}/>
          <Route path = "/student" element= {<Students />}/>
          <Route path = "/course" element= {<Courses />}/>
          <Route path = "/instructor" element= {<Instructors />}/>
          <Route path = "/company" element= {<Companies />}/>
          <Route path = "/review" element= {<Reviews />}/>
          <Route path = "/earning" element= {<FinancialEarnings />}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
