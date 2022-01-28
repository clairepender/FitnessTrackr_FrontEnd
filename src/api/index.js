//API CALLS//

// import axios from 'axios';
// const { REACT_APP_API_URL = 'https://fitnesstrac-kr.herokuapp.com' } = process.env;
// export const API_URL = REACT_APP_API_URL;
// export const api = axios.create({
//   baseURL: `${API_URL}/api`,
// })
// export const callApi = async ({url, method, token, body, updateStatus}) => {
//   console.log({url: `${API_URL}/api${url}`, method, token, body, updateStatus})
//   try {
//     const options = {
//       method: method ? method.toLowerCase() : 'get',
//       url: `${API_URL}/api${url}`,
//       data: body,
//     };
//     if(token) {
//       options.headers = {'Authorization': `Bearer ${token}`};
//     }
    
//     const {data} = await api(options);
//     console.log(data)
//     if(data.error) throw data.error;
//     console.log(data);
//     return data;
//   } catch (error) {
//     const errToThrow = error?.response?.data?.error; // handle axios 400- and 500-level errors
//     console.error(errToThrow);
//     updateStatus({error: errToThrow || 'ERROR'});
//   }
// }


// if a route has a (*) next to it, it should require a logged in user to be present
// if a route has a (**) next to it, the logged in user should be the owner of the modified object
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants';

//***** USER FUNCTIONS *****//

//get user//


export async function getUser(token, setUser){
    try {
        const res = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        const data = await res.json();
        const username = data.username;
        setUser(username)
        localStorage.setItem("user", username);
        return username
    } catch(err) {
      console.error(err);
    }
}
  


//***** ROUTINE FUNCTIONS *****//

//GET /api/routines//
//GET ALL PUBLIC ROUTINES//
// returns a list of all public routines//

export async function getAllRoutines(setDisplay) {
    try {
        const response = await fetch(`${BASE_URL}/routines`, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const result = await response.json();
          setDisplay(result)
          return result;
       
    } catch(error) {
        console.error(error);
    }
} 


//POST /api/routines//
// a request to this endpoint will attempt to create a new routine. you must pass a valid token with this request, or it will be rejected.



export async function createRoutine(token, newName, newGoal, newPublic) {
    try {
        const response = await fetch(`${BASE_URL}/routines`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                  name: newName,
                  goal: newGoal,
                  isPublic: newPublic,
              })
          })
          const result = await response.json();
          return result;
        
    } catch(error) {
        console.error(error);
    }
} 


// GET /api/users/:username/routines //
// returns a list of public routines for particular user//

const USER_BASE_URL = "https://fitnesstrackr-rafa.herokuapp.com/api/users";

export async function getUserRoutines(username, token) {
    if(!username) return [];
    try {
        const response = await fetch(`${USER_BASE_URL}/${username}/routines`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const data = await response.json();
        return data;
      
    } catch(error) {
        console.log(error);
    }
} 


// PATCH /api/routines/:routineId//
// update a routine, notably change public/private, the name, or the goal //

export async function updateRoutine(token, name, description) {
    try {
        const response = await fetch(`${BASE_URL}/activities/:activityId`, {
            headers: {
                'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
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

export async function deleteRoutine(token, routineId) {
    try {
        const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            },
          })
          const result = await response.json();
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
        const response = await fetch(`${BASE_URL}/activities`, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const result = await response.json();
          return result;
    } catch(error) {
        console.error(error);
    }
} 



//POST /api/activities //
//CREATE A NEW ACTIVITY//
// a request to this endpoint will attempt to create a new activity. you must pass a valid token with this request, or it will be rejected//

export async function createNewActivity(token, newActName, newActDesc){
    const response = await fetch(`${BASE_URL}/activities`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
        body: JSON.stringify({
          name: newActName,
          description: newActDesc
        })
    })
    const data = await response.json();
    return data;
  }

//PATCH /api/activities/:activityId //
// anyone can update an activity//



//GET /api/activities/:activityId/routines
// returns a list of public routines which feature that activity



//POST /api/routines/:routineId/activities //
// attaches a single activity to a routine. prevents duplication on (routineId, activityId) pair //
//ATTACH AN ACTIVITY TO A ROUTINE //

export async function addActivityToRoutine(routineId, activityId, newCount, newDuration) {
    try {
        const response = await fetch(`${BASE_URL}/routines/${routineId}/activities`, {
            method: 'POST',
            body: JSON.stringify({
                activityId: activityId,
                count: newCount,
                duration: newDuration
            })
        })
        const data = await response.json();
    } catch(error) {
        console.error(error)
    }
}


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
          return result;
      
    } catch(error) {
        console.error(error);
    }
}