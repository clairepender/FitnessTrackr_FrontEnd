import React, {useState } from 'react';
import { addActivityToRoutine, getAllActivities } from '../api';



const AddActivityToRoutine = ({routineId, displayActivities, setDisplayActivities}) => {

  


    const [newCount, setNewCount] = useState([]);
    const [newDuration, setNewDuration] = useState([]);
    const [activityId, setActivityId] = useState([]);
 

    return (
        <div>
                <form
                    onSubmit={async (event) => {
                        event.preventDefault()
                        await addActivityToRoutine(routineId, activityId, newCount, newDuration)
                    }}
                >
                    <h1>Add activity</h1>
                    <label>Choose an activity: </label>
                    <select value={activity}
                        onChange={(event) => {
                            event.preventDefault();
                            getAllActivities(event.target.value)
                        }}>
                        {displayActivities.map(activity => (
                            <option value={activity.id} key={activity.id}>
                                {activity.name}
                            </option>
                        ))}
                    </select>
                    <input
                        type='number'
                        value={newCount}
                        onChange={event => newCount(event.target.value)}
                        id="updateCount"
                        placeholder="Count"
                    />
                    <input
                        type='number'
                        value={newDuration}
                        onChange={event => newDuration(event.target.value)}
                        id="updateDuration"
                        placeholder="Duration"
                    />
                    <button>
                        Add activity
                    </button>
                </form>
        </div>
    )



    
}


export default AddActivityToRoutine;