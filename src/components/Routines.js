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
        <div className="container-fluid">
            <div className="centered">
                <div className="text-center font-spartan">
                <h2>
               Public Routines
               </h2>
               </div>

            {display.map((routine, index) => {
                return (
                    <div className="card w-75 p-1 m-2 ms-5" key={index}>
                        <div className="card-header"> <h4>{routine.name}</h4></div>
                            <ul>
                               <div className="card-body p-2"> 
                                <h5>Goal: {routine.goal} </h5>
                                <h6>Creator: {routine.creatorName} </h6>
                                <h6>Activities: </h6>
                                    {routine.activities ? (routine.activities.map((activity, actindex) => (
                                        <div key={actindex}>
                                            <h6>Activity Name: {activity.name}</h6>
                                            <ul>
                                                <li>Description: {activity.description}</li>
                                                <li>Count: {activity.count}</li>
                                                <li>Duration: {activity.duration}</li>
                                            </ul> 
                                        </div> 
                                    ))) : 
                                    (<p>none</p>)}
                                </div>
                            </ul>
                    </div> 
                    
                ) 
            })}
            </div>
        </div>
    )
    
}

export default Routines;