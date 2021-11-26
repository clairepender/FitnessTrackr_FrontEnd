//API CALLS//

// if a route has a (*) next to it, it should require a logged in user to be present
// if a route has a (**) next to it, the logged in user should be the owner of the modified object
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants';

//***** USER FUNCTIONS *****//

export function isLoggedIn(token) {
    if (token) {
      return true
    } else {
      return false
    }
  };

//login//

// export async function login(userName, passWord) {

//     try {
//         const response = await fetch(`${BASE_URL}/users/login`, {
//             method: "POST",
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//             user: {
//                 username: userName,
//                 password: passWord
//                   }
//                 })
//             })
              
//                 const result = await response.json();
//                 console.log(result)
//                 return result;

//     } catch(error) {
//         console.error(error);
//     }
// }

//register//

// export async function register(userName, passWord) {
//     try {
//         const response = await fetch(`${BASE_URL}/users/register`, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                     username: userName,
//                     password: passWord
//             })
//         })
        
//         const result = await response.json();
//         return result;

//     } catch(error) {
//         console.error(error);
//     }
// }

//get user//

export async function getUser(token) {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            },
          })
          const result = await response.json();
        //   console.log(result);
          return result;
        //   setUser[result.data.username];
        //   return data;
    } catch(error) {
        console.error(error);
    }
} 

//***** ROUTINE FUNCTIONS *****//

//GET /api/routines//
//GET ALL PUBLIC ROUTINES//
// returns a list of all public routines//

export async function getAllRoutines() {
    try {
        const response = await fetch(`${BASE_URL}/routines`, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const result = await response.json();
        //   console.log(result);
          return result;
        //   setUser[result.data.username];
        //   return data;
    } catch(error) {
        console.error(error);
    }
} 


//POST /api/routines//
// a request to this endpoint will attempt to create a new routine. you must pass a valid token with this request, or it will be rejected.



export async function createRoutine(token, name, goal, isPublic) {
    try {
        const response = await fetch(`${BASE_URL}/routines`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer' + token
            },
            body: JSON.stringify({
                routine: {
                  name: name,
                  goal: goal,
                  isPublic: isPublic,
                }
              })
          })
          const result = await response.json();
        //   console.log(result);
          return result;
        
    } catch(error) {
        console.error(error);
    }
} 


// GET /api/users/:username/routines //
// returns a list of public routines for particular user//


export async function getUserRoutines() {
    try {
        const response = await fetch(`${BASE_URL}/users/:username/routines`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer' + token
            },
          })
          const result = await response.json();
        //   console.log(result);
          return result;
      
    } catch(error) {
        console.error(error);
    }
} 

// PATCH /api/routines/:routineId//
// update a routine, notably change public/private, the name, or the goal //

export async function updateRoutine(token, name, description) {
    try {
        const response = await fetch(`${BASE_URL}/activities/:activityId`, {
            headers: {
                'Content-Type': 'application/json',
              'Authorization': 'Bearer' + token
            },
            body: JSON.stringify({
                routine: routine
            }),
        })
    } catch(error) {
        console.error(error);
    }
}


// DELETE /api/routines/:routineId //
// hard delete a routine. make sure to delete all the routineActivities whose routine is the one being deleted //

export async function deleteRoutine() {
    try {
        const response = await fetch(`${BASE_URL}/routines/:routineId`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer' + token
            },
          })
          const result = await response.json();
        //   console.log(result);
          return result;
      
    } catch(error) {
        console.error(error);
    }
}


//***** ACTIVITIES FUNCTIONS *****//

//GET /api/activities //
// returns a list of all activities in the database//

export async function getAllActivities() {
    try {
        const response = await fetch(`${BASE_URL}/routines`, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const result = await response.json();
          console.log(result);
          return result;
        //   setUser[result.data.username];
        //   return data;
    } catch(error) {
        console.error(error);
    }
} 



//POST /api/activities //
// a request to this endpoint will attempt to create a new activity. you must pass a valid token with this request, or it will be rejected//



//PATCH /api/activities/:activityId //
// anyone can update an activity//



//GET /api/activities/:activityId/routines
// returns a list of public routines which feature that activity



//POST /api/routines/:routineId/activities //
// attaches a single activity to a routine. prevents duplication on (routineId, activityId) pair //



//PATCH /api/routine_activities/:routineActivityId //
// update the count or duration on the routine activity //




//DELETE /api/routine_activities/:routineActivityId//
// remove an activity from a routine (hard deleting routine_activity), dissociating an activity from a routine //

export async function removeActivityFromRoutine() {
    try {
        const response = await fetch(`${BASE_URL}/routine_activities/:routineActivityId`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer' + token
            },
          })
          const result = await response.json();
        //   console.log(result);
          return result;
      
    } catch(error) {
        console.error(error);
    }
}