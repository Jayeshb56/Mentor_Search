
import './App.css';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Navbar from './components/Navbar'
import RegistrationForm from './form/RegistrationFrom';
import LoginForm from './form/LoginForm';
import Home from './components/Home';
import Features from './components/Features';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route exact path="/Home" Component={Home} />
      <Route exact path="/RegistrationForm" Component={RegistrationForm} />
      <Route exact path="/LoginForm" Component={LoginForm} />
      <Route exact path="/Features" Component={Features} />
    </Routes>
  </Router>
  );
}

export default App;
