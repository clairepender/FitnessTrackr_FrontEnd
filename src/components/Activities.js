import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAllActivities } from '../api';


const Activities = ({token}) => {
    const [displayActivities, setDisplayActivities] = useState([]);


    useEffect(async () => {
        const getActivities = await getAllActivities(token)
        console.log(getActivities)
        setDisplayActivities(getActivities)
    }, [token])

    return (
        <div>
                <h2>
               All Public Activities
               </h2>
            

            {displayActivities.map((activity, index) => {
                return (
                    <div key={index}>
                        <h4>Name: {activity.name}</h4>
                        <ul>
                            <li>Description: {activity.description}</li>
                            <li>Creator: {activity.creatorName} </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default Activities;