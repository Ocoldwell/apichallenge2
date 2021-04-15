import React from 'react';
import {useForm} from 'react-hook-form';
import { useHistory } from 'react-router';
import { Col, Container, Form, FormGroup, Button, Input, Label } from 'reactstrap';
import { auth, firestore, provider } from '../../firebase';

const Login = () => {
  const {register, handleSubmit } = useForm();
  const history = useHistory()
  const handleGoogle = (event) => auth.signInWithPopup(provider).then((event) => {
    const credential = event.credential;
    const token = event.token;
    const user = event.user;
    history.push("/home")
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage= error.message;
    const email = error.email;
    const credential = error.credential;
  })

  const onSubmit = (form) => auth.signInWithEmailAndPassword(form.email, form.password).then((response) => {
    const user = response.user;
    firestore.collection("users").doc(user.uid).get().then((response) => {
      history.push("/home");
  }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(`${errorCode}:${errorMessage}`);
      });
    })
  return (
    <Container>
    <h1>Welcome to ollies login form</h1>
      <Form className="form" onSubmit={handleSubmit(onSubmit)} >
      <Col>
        <FormGroup>
          <Label>Email</Label>
          <Input name="email" innerRef={register({ required: true })} />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>Password</Label>
          <Input name="password" innerRef={register({ required: true })} />
        </FormGroup>
      </Col>
        <Button name="submit" type="submit" >Log In</Button>
      </Form>
    <Button name="google"  onClick={handleGoogle}>Google</Button>
    </Container>
  )
}

export default Login
