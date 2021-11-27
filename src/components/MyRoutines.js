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




const MyRoutines = ({token}) => {
    const [user, setUser] = useState([]);
    // const [routines, setRout] = useState([]);
    // const [displayRout, setDisplayRout] = useState([]);





    useEffect(async () => {
       if(token) {
       const userdata = await getUser(token, setUser)
       console.log('userdata', userdata)
       const userRoutineData = await getUserRoutines(userdata, token)
       console.log(userRoutineData)
       }

    }, [])



    // useEffect(async () => {
        
    //       const userRoutineData = await getUserRoutines(user, token)
    //       console.log(userRoutineData)
        
    // }, [user]);

    
    
        return (
            <h3>test {user} </h3>
        )
    
        
}

export default MyRoutines;