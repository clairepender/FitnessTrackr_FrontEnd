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
                    <div className="card w-75 p-1 m-2 ms-1" key={index}>
                        <div className="card-header"> <h4>{activity.name}</h4></div>
                            <div className="card-body">
                        
                            <h6>Description: {activity.description}</h6>
                        
                            </div>
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