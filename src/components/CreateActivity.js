import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createNewActivity } from '../api';


const CreateActivity = ({token, newActivity, setNewActivity}) => {
    const [newActName, setNewActName] = useState([]);
    const [newActDesc, setNewActDesc] = useState([]);


    return (
        <div>
          <article>
              <div>
              <h3>Create New Activity</h3>
              <form onSubmit={async (event) => {
                  event.preventDefault();
                  try {
                      const result = await createNewActivity(token, newActName, newActDesc)
                      setNewActivity([...newActivity, result])
                      //create an alert here?//
                  } catch (error) {
                      console.error(error)
                  };
              }}>
                  <div>
                  <label htmlFor="activityName">Activity Name:</label>
                  <input 
                      type='text'
                      value={newActName}
                      onChange={({target: {value}}) => setNewActName(value)}
                      className='form-control'
                      id='activityName'
                      placeholder='name'
                  /></div>
                  <div>
                      <label htmlFor="activityDescription">Description:</label>
                      <input 
                          type='text'
                          value={newActDesc}
                          onChange={({target: {value}}) => setNewActDesc(value)}
                          className='form-control'
                          id='activityDescription'
                          placeholder='description'
                      /></div>
                        <div>
                        <button className="submitNewActivity">Submit!</button>
                        </div>
              </form>
              </div>
        </article>
              
            <div>
                <Link to="/activities">
                    <button type="button" id="activities">
                        Back to All Public Activities
                    </button>
                </Link>
            </div>


            {/* <form onSubmit={async (event) => {
                event.preventDefault();
                await
            }} */}

</div>
    )

}

export default CreateActivity;