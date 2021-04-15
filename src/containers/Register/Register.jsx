import React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { auth } from "../../firebase";

const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (form) => auth.createUserWithEmailAndPassword(form.email, form.password).then(userCredential =>{
    const user = userCredential.user;
  }).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })

  console.log(watch("email"));
  return (
    <Container className="container">
      <Form onSubmit={handleSubmit(onSubmit)} className="form">
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              name="email"
              placeholder="email"
              type="email"
              innerRef={register}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Username</Label>
            <Input
              name="username"
              type="text"
              placeholder="username"
              innerRef={register({ required: true })}
            />
            {errors.username && <span>This field is required</span>}
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>Name</Label>
            <Input
              name="name"
              type="text"
              placeholder="name"
              innerRef={register({ required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
          <Label>Favourite Game</Label>
            <Input
              name="favouriteGame"
              type="text"
              innerRef={register({ required: true })}
            />
            {errors.favouriteGame && <span>This field is required</span>}
          </FormGroup>
          <Button type="submit" >Submit</Button>
        </Col>
        
      </Form>
    </Container>
  );
};

export default Register;
