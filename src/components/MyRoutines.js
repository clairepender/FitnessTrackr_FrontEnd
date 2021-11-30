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


// async function getMyRoutines(user, token) {
//     const myroutines = await getUserRoutines(user.username, token)
//     console.log('these are my routines', myroutines)
// }


const MyRoutines = ({token}) => {
    const [user, setUser] = useState([]);
    const [myRoutines, setMyRoutines] = useState([]);
    // const [displayRout, setDisplayRout] = useState([]);





    useEffect(async () => {
       if(token) {
      const getUserData = await getUser(token, setUser)
       console.log('this is the useEffectGetUserData', getUserData)
       setUser(getUserData)
       }
       
    
    }, [token])



    useEffect(async () => {
        if (token) {
        const myRoutineData = getUserRoutines(user, setMyRoutines, token)
        console.log('myRoutineData from MyRoutines', myRoutineData)
        setMyRoutines(myRoutineData)
        }
    }, [token]);

    
    
        return (
            <div>

            <h3> {user}: </h3>

            { myRoutines.map((routine, index) => {
                return (
                    <div key={index}>
                        <h4>{routine.name}</h4>
                        <ul>
                            <li>{routine.goal}</li>
                            <li>{routine.activities}</li>
                        </ul>
                    </div>
                )
            })}

        
            
            {/* <Link to="/createnewroutine">
				<button type="button" id="newRoutine">
					Create A New Routine
				</button>
			</Link> */}

            </div>
        )
    
        
}

export default MyRoutines;