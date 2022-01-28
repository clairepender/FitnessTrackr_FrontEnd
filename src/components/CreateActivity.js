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
              <div className="text-center font-spartan p-2"><h2>Create New Activity</h2></div>
              
              <form className="m-3 w-50 position-absolute top-50 start-50 translate-middle"
              onSubmit={async (event) => {
                  event.preventDefault();
                  try {
                      const result = await createNewActivity(token, newActName, newActDesc)
                      setNewActivity([...newActivity, result])
                      //create an alert here?//
                  } catch (error) {
                      console.error(error)
                  };
              }}>
                  <div className="form-group centered">
                  <label className="row m-2"
                  htmlFor="activityName">Activity Name:</label>
                  <input 
                      type='text'
                      value={newActName}
                      onChange={({target: {value}}) => setNewActName(value)}
                      className='form-control'
                      id='activityName'
                      placeholder='name'
                  /></div>
                  <div className="form-group centered">
                      <label className="row m-2"
                      htmlFor="activityDescription">Description:</label>
                      <input 
                          type='text'
                          value={newActDesc}
                          onChange={({target: {value}}) => setNewActDesc(value)}
                          className='form-control'
                          id='activityDescription'
                          placeholder='description'
                      /></div>
                        <div>
                        <button className="btn m-3 btn-info btn-sm btn-block">Submit!</button>
                        </div>

                        <div id="links" className="text-spartan">
                        <Link to="/activities">
                        <h6>Back to Public Activities</h6>
                        </Link></div>
              </form>
              </div>
        </article>
              
           


            {/* <form onSubmit={async (event) => {
                event.preventDefault();
                await
            }} */}

</div>
    )

}

export default CreateActivity;