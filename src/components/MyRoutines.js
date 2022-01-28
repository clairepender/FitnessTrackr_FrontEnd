import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserRoutines, deleteRoutine } from '../api';



/* AS A REGISTERED USER on the My Routines tab, I want to:

be shown a form to create a new routine
the form should have text fields for name and goal
for each routine which is owned by me I should
be able to update the name and goal for the routine
be able to delete the entire routine
be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
be able to update the duration or count of any activity on the routine
be able to remove any activity from the routine */



async function getMyRoutines(username, token, setMyRoutines) {
    console.log(username)
    const routines = await getUserRoutines(username, token)
    // console.log('these are my routines', routines)
    setMyRoutines(routines)
    return routines;
}


const MyRoutines = ({token, user}) => {
    const [myRoutines, setMyRoutines] = useState([]);
    const history = useHistory();

    function backToAllRoutines() {
        history.push('/routines')
    };


    useEffect(() => {
        if(user) {
            getMyRoutines(user, token, setMyRoutines)
        }
    }, [user])




    return  (
            <div>
                <div className="font-spartan text-center p-2"><h2> Routines for {user} </h2></div>
                
                {myRoutines.map((routine, index) => {
                    
                    return (
                    <> 
                    
                        <div className="card w-75 p-1 m-2 ms-5" key={index}>
                            <div className="card-header"> <h4>{routine.name}</h4></div>
                            
                            <ul>
                                <h5>Goal: {routine.goal}</h5>
                                <h6>Activities: {routine.activities}</h6>
                                    {myRoutines.activities ? (myRoutines.activities.map((activity, actindex) => (
                                        <ul key={actindex}>
                                            <li>Activity Name: {activity.name}</li>
                                            <ul>
                                                <li>Description: {activity.description}</li>
                                                <li>Count: {activity.count}</li>
                                                <li>Duration: {activity.duration}</li>
                                            </ul> 
                                        </ul>
                                    ))) : 
                                    (<p>none</p>)}
                                    <ul>
                                            <button
                                            className="btn mb-2 btn-info btn-sm btn-block"
                                                onClick={async () => {
                                                const routineId = routine.id
                                                const result = await deleteRoutine(token, routineId);
                                                alert('Routine deleted!');
                                                backToAllRoutines();
                                                }}
                                                className="deleteButton">
                                                Delete Routine
                                            </button>
                                    </ul>
                            </ul>
                        </div>
                        </>
                    )
                })}

            </div>

            )
        
        
}

export default MyRoutines;

{/* <li>Activities: </li>
                                {routine.activities ? (routine.activities.map((activity, actindex) => (
                                    <ul key={actindex}>
                                        <li>Activity Name: {activity.name}</li>
                                        <ul>
                                            <li>Description: {activity.description}</li>
                                            <li>Count: {activity.count}</li>
                                            <li>Duration: {activity.duration}</li>
                                        </ul> 
                                    </ul>
                                ))) : */}