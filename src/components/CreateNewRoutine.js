import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createRoutine } from '../api'

/* As a registered user on the My Routines tab, I want to:

be shown a form to create a new routine
the form should have text fields for name and goal */


const CreateNewRoutine = ({token, display, setDisplay}) => {
    const [newName, setNewName] = useState('');
    const [newGoal, setNewGoal] = useState('');
    const [newPublic, setNewPublic] = useState(false)

    const history = useHistory();

    function backToAllRoutines() {
        history.push('/routines')
    };



    if(token) {
      return (
          <div>
            <article>
                <div>
                <div className="text-center font-spartan p-2"><h2>Create New Routine</h2></div>
                <form 
               className="m-3 w-50 position-absolute top-50 start-50 translate-middle"
                onSubmit={async (event) => {
                    event.preventDefault();
                    try {
                        const result = await createRoutine(token, newName, newGoal, newPublic)
                        setDisplay([...display, result])
                        //create an alert here?//
                    } catch (error) {
                        console.error(error)
                    };
                    backToAllRoutines();
                }}>
                    <div className="form-group centered">
                    <label className="row m-2"
                    htmlFor="routineName">Routine Name:</label>
                    <input 
                        type='text'
                        value={newName}
                        onChange={({target: {value}}) => setNewName(value)}
                        className='form-control'
                        id='routineName'
                        placeholder='name'
                    /></div>
                    <div className="form-group centered">
                        <label className="row m-2"
                        htmlFor="routineGoal">Routine Goal:</label>
                        <input 
                            type='text'
                            value={newGoal}
                            onChange={({target: {value}}) => setNewGoal(value)}
                            className='form-control'
                            id='routineGoal'
                            placeholder='goal'
                        /></div>
                        <div className="form-group centered">
                        <label className="column m-2"
                        htmlFor="routinePublic">Make Routine Public?</label>
                        <input className="column mb-2"
                        type='checkbox'
                        value={newPublic}
                        onChange={({target: {value}}) => setNewPublic(!newPublic)}
                        id='routinePublic'
                        /></div>
                            <div>
                                <button className="btn m-2 btn-info btn-sm btn-block">Submit!</button>
                            </div>

                        <div id="links" className="text-spartan">
                        <Link to="/myroutines">
                        <h6>Back to My Routines</h6>
                        </Link></div>
                </form>
                
                
                </div>
          </article>

                

</div>
      )
    }  else {
        return (
            <h3> Please login to create a new routine </h3>
        )
    }
}




export default CreateNewRoutine;