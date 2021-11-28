import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createRoutine } from '../api'

/* As a registered user on the My Routines tab, I want to:

be shown a form to create a new routine
the form should have text fields for name and goal */


const CreateNewRoutine = ({token, display, setDisplay}) => {
    const [newName, setNewName] = useState('');
    const [newGoal, setNewGoal] = useState('');
    const [newPublic, setNewPublic] = useState(false)



    if(token) {
      return (
          <article>
              <h3>Create New Routine</h3>
              <form onSubmit={async (event) => {
                  event.preventDefault();
                  try {
                    const result = await createRoutine(token, newName, newGoal, newPublic)
                    setDisplay([...display, result])
                    //create an alert here?//
                  } catch (error) {
                      console.error(error)
                  };
              }}>
                  <label htmlFor="routineName">Routine Name:</label>
                  <input 
                    type='text'
                    value={newName}
                    onChange={({target: {value}}) => setNewName(value)}
                    className='form-control'
                    id='routineName'
                    placeholder='name'
                  />
                    <label htmlFor="routineGoal">Routine Goal:</label>
                    <input 
                        type='text'
                        value={newGoal}
                        onChange={({target: {value}}) => setNewGoal(value)}
                        className='form-control'
                        id='routineGoal'
                        placeholder='goal'
                    />
                    <label htmlFor="routinePublic">Make Routine Public?</label>
                    <input 
                    type='checkbox'
                    value={newPublic}
                    onChange={({target: {value}}) => setNewPublic(!newPublic)}
                    id='routinePublic'
                    />
                    <button className="submitNewRoutine">Submit!</button>
              </form>
          </article>
      )
    }  else {
        return (
            <h3> Please login to create a new routine </h3>
        )
    }
}




export default CreateNewRoutine;