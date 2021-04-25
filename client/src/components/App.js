import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { AuthProvider } from '../firebase/Auth';
import Navigation from './Navigation';
import Landing from './Landing';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <AuthProvider>
      <Router>
            <Navigation></Navigation>
            <Container className="mt-5">
                <Route exact path="/" component={Landing}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signup" component={SignUp}></Route>
            </Container>
      </Router> 
    </AuthProvider>
  );
}

export default App;
