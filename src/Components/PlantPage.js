import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Plant from './Plant';
import NewPlant from './NewPlant';
import UpdatePlant from './UpdatePlant';

const PlantPage = () => {

  const [ plants, setPlants ] = useState([]);



  return(
    <div className='container'>
      <h1>Water My Plants</h1>
      <div className='newPlantForm'>
        <p>Add a Plant:</p>
        <NewPlant />
      </div>
    </div>
  )
}

export default PlantPage;