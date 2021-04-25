import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../firebase/Auth';
import { doCreateUserWithEmailAndPassword } from '../firebase/FirebaseFunctions';

const SignUp = () => {
    const { currentUser } = useContext(AuthContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);

    // Custom validation for fields
    const validateForm = (form) => {
        return true;
    };

    const handleSignUp = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setValidated(true);
        if (validateForm()) {
            try {
                doCreateUserWithEmailAndPassword(email, password, `${firstName} ${lastName}`);
            } catch(e) {
                alert(e);
            }
        }
    };

    const validForm = () => {
        // return email.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0;
        return true;
    };
    
    return (
        <div className="Login">
            <Form noValidate validated={validated} onSubmit={handleSignUp}>
                <Form.Group size="lg" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        required
                        autoFocus
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid first name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group size="lg" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid last name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid first name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid first name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button block size="lg" variant="primary" type="submit" disabled={!validForm()}>
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;