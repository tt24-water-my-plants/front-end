import React, { useState } from 'react';
import './componentStyles/NewPlant.css';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom'

const initialPlantValues = {
  nickname: '',
  species: '',
  h20_frequency: '',
  img_url: '',
}

const NewPlant = () => {

  const [plant, setPlant] = useState(initialPlantValues);
  const { push } = useHistory();

const handleChange = (e) => {
  e.persist();
  let value = e.target.value;
  setPlant({
    ...plant,
    [e.target.name]: value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
//   console.log('heythere');
  axiosWithAuth()
    .post(`/users/:id/plants`) //2 is just a placeholder.  needs to be user ID??????
    .then((res) => {
      // props.setPlants(res.data)
//       console.log('setplants this? : ', res.data);
      push('/Plants');
    })
    .catch(err=>{
      console.log(err);
    });
};

  return(
      <div className='new-form-container'>
      <form className='new-plant-form' onSubmit={handleSubmit}>

      <label>
          Nickname
          <input 
          type='text'
          name='nickname'
          value={plant.nickname}
          placeholder='nickname, i.e. Frank'
          onChange={handleChange}
           />
        </label>

        <label>
          Image URL
          <input 
          type='text'
          name='species'
          value={plant.species}
          placeholder='species'
          onChange={handleChange}
           />
        </label>

        <label>
          Species
          <input 
          type='text'
          name='h20_frequency'
          value={plant.h20_frequency}
          placeholder='i.e. daily, weekly'
          onChange={handleChange}
           />
        </label>

        <label>
          Watering Frequency
          <input 
          type='text'
          name='img_url'
          value={plant.img_url}
          placeholder='image url'
          onChange={handleChange}
           />
        </label>
        <button type='submit'>Submit</button>
  )
}
export default NewPlant