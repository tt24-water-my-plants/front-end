import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Plant from './Plant';
import NewPlant from './NewPlant';
import "../App.css"
// import UpdatePlant from './UpdatePlant';

import './componentStyles/PlantPage.css';

const PlantPage = () => {

  const [ plants, setPlants ] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get('/auth/plants')
    .then(res => {
      console.log('data', res.data);
      setPlants(res.data);
      // console.log(plants);
    })
    .catch(err => {
      console.log('error: ', err)
    })
   }, []);

  return(
    <div className='container'>
      <h1>Water My Plants</h1>
      <div className='new-plant-form'>
        <p>Add a Plant:</p>
        <NewPlant />
      </div>
      <div className='plants-loading-container'>
        <h2>Plants:</h2>
          <div className='plants-loading-container'>
            {plants.map((item) => {
              return (
                <Plant 
                key={item.id}
                species={item.species}
                h2o_frequency={item.h2o_frequency}
                img_url={item.img_url} />
              )
            })}
          </div>
      </div>
    </div>
  )
}

export default PlantPage;