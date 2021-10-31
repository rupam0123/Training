import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputLabel from 'react-bootstrap/Button';


export default function TaskDetails (props) {
  return (
    <>
    <h1>Add Task</h1>
    <Form onSubmit={props.handleSubmit}>
      <InputLabel className="title"> Title: </InputLabel>
      <FormControl value={props.todo.name} name="title" onChange={props.handleChange} />
      <InputLabel>Description: </InputLabel>
        <FormControl value={props.todo.city} name="description" onChange={props.handleChange} />
      
      <Button type="submit">Submit</Button>
    </Form>
    </>
  );
}