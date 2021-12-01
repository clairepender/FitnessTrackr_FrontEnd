import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getUser, getUserRoutines } from '../api';



/* AS A REGISTERED USER on the My Routines tab, I want to:

be shown a form to create a new routine
the form should have text fields for name and goal
for each routine which is owned by me I should
be able to update the name and goal for the routine
be able to delete the entire routine
be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
be able to update the duration or count of any activity on the routine
be able to remove any activity from the routine */



async function getMyRoutines(username) {
    console.log(username)
    const routines = await getUserRoutines(username)
    // console.log('these are my routines', routines)
    return routines;
}


const MyRoutines = ({token, user}) => {
    const [myRoutines, setMyRoutines] = useState([]);




    useEffect(async () => {
        if(user) {
           const userData = await getMyRoutines(user, token, setMyRoutines)
            console.log(user)
            setMyRoutines(userData)
            
        }
    }, [user])




        return (
            <div>

            {/* <h3> {user}: </h3> */}

            {myRoutines.map((routine, index) => {
                return (
                    <div key={index}>
                        <h4>Routine Name: {routine.name}</h4>
                        <ul>
                            <li>Goal: {routine.goal}</li>
                            <li>Activities: {routine.activities}</li>
                        </ul>
                    </div>
                )
            })}

            </div>
        )
        
}

export default MyRoutines;