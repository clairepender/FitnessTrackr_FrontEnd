//API CALLS//

import { BASE_URL } from '../constants';

//***** USER FUNCTIONS *****//

//login//

export async function login(userName, passWord) {

    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            user: {
                username: userName,
                password: passWord
                  }
                })
            })
              
                const result = await response.json();
                return result;

    } catch(error) {
        console.error(error);
    }
}

//register//

export async function register(username, password) {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username: username,
                    password: password
            })
        })
        const result = await response.json();
        return result;
    } catch(error) {
        console.error(error);
    }
}

//get user//

export async function getUser(token, setUser) {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            },
          })
          const result = await response.json();
          console.log(result);
          
        //   setUser[result.data.username];
        //   return data;
    } catch(error) {
        console.error(error);
    }
} 

//***** ROUTINE FUNCTIONS *****//

//GET /api/routines//
// returns a list of all public routines//




//POST /api/routines//
// a request to this endpoint will attempt to create a new routine. you must pass a valid token with this request, or it will be rejected.





// GET /api/users/:username/routines //
// returns a list of public routines for particular user//




// PATCH /api/routines/:routineId//
// update a routine, notably change public/private, the name, or the goal //




// DELETE /api/routines/:routineId //
// hard delete a routine. make sure to delete all the routineActivities whose routine is the one being deleted //




//***** ACTIVITIES FUNCTIONS *****//

//GET /api/activities //
// returns a list of all activities in the database//



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