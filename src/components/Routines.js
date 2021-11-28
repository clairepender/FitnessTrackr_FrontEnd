import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAllRoutines, } from '../api'

/* AS ANY USER on the Routines tab, I want to:

see a list of all public routines showing:
The routine name, goal, and creator's username
A list of activities for the routine, including their name, description, and duration and/or count*/

// async function allRoutines(setRoutines, setDisplay) {
//     const routines = await getAllRoutines();
//     setRoutines[routines];
//     setDisplay[routines];
// }

const Routines = ({token}) => {
    const [display, setDisplay] = useState([]);

 

    useEffect(async () => {
        const getRoutines = await getAllRoutines(token);
        setDisplay(getRoutines)
    }, [token])

    return (
        <div>
                <h2>
               All Public Routines:
               </h2>
            

            {display.map((routine, index) => {
                return (
                    <div key={index}>
                        <h4>{routine.name}</h4>
                        <ul>
                            <li>Goal: {routine.goal} </li>
                            <li>Creator: {routine.creatorName} </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )

}

export default Routines;