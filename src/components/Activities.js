import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllActivities } from '../api';


const Activities = ({token}) => {
    const [displayActivities, setDisplayActivities] = useState([]);


    useEffect(async () => {
        const getActivities = await getAllActivities(token)
        console.log(getActivities)
        setDisplayActivities(getActivities)
    }, [token])

    return (
        <div className="container">
                <h2>
               All Public Activities
               </h2>
            

            {displayActivities.map((activity, index) => {
                return (
                    <div key={index}>
                        <h4>Name: {activity.name}</h4>
                        <ul>
                            <li>Description: {activity.description}</li>
                        </ul>
                    </div>
                )
            })}

            <div className="form-group centered">
                <Link to="/createactivity">
                    <button type="button" id="createnewactivity"
                    className="btn mb-2 btn-info btn-sm btn-block">
                        Create a New Activity
                    </button>
                </Link>
            </div>

        </div>

    )
}

export default Activities;