import React from 'react';

const addUser = (props) => {

    const addUserHandler = event => {
        event.preventDefault();
    }
    return (
        <form onSubmit = {addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input id="username" type="text"></input>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number"></input>
            <button type="submt">Add user</button>
        </form>
    )

}

export default addUser;