import React, { useState, useRef } from 'react';
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
   const collegeNameRef = useRef();
   const nameInputRef=useRef();
   const ageInputRef=useRef();

  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState()
 

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredaAge = ageInputRef.current.value;
    const enteredCollegeName = collegeNameRef.current.value;

    if (enteredName.trim().length === 0 || enteredaAge.trim().length === 0 || enteredCollegeName.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Enter a valid name,age and college-name.'
      })
      return;
    }
    if (+enteredaAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Enterd age should be >0'
      })
      return;
    }
    props.onAddUser(enteredName, enteredaAge,enteredCollegeName);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collegeNameRef.current.value = '';
  };

  const errorHandler = ()=>{
    setError(null);
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message = {error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          ref={nameInputRef}
          />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          ref={ageInputRef}
          />
        <label htmlFor="college">College name</label>
        <input
          id="college"
          type="text"
          ref={collegeNameRef}
          />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;