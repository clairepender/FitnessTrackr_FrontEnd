import React, { useEffect, useState } from 'react';
import { } from 'react-router-dom';
import { getAllRoutines, } from '../api'

/* AS ANY USER on the Routines tab, I want to:

see a list of all public routines showing:
The routine name, goal, and creator's username
A list of activities for the routine, including their name, description, and duration and/or count*/



async function getRoutines(setDisplay) {
    const theRoutines = await getAllRoutines(setDisplay)
    console.log(theRoutines)
    // setDisplay(theRoutines)
    // console.log(theRoutines)
}

const Routines = ({token}) => {
    const [display, setDisplay] = useState([]);
 

    useEffect(() => {
        if(token) {
       getRoutines(setDisplay)
    }
    }, [token])

   
    return (
        <div>
                <h2>
               All Public Routines
               </h2>
            

            {display.map((routine, index) => {
                return (
                    <div key={index}>
                        <h4>{routine.name}</h4>
                        <ul>
                            <li>Goal: {routine.goal} </li>
                            <li>Creator: {routine.creatorName} </li>
                            <li>Activities: </li>
                                {routine.activities ? (routine.activities.map((activity, actindex) => (
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
                        
                        </ul>
                    </div>
                )
            })}
        </div>
    )
    
}

export default Routines;