import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const initialPlant = {
  nickname: '',
  species: '',
  h20_frequency: '',
  img_url: '',
}

const UpdatePlant = (props) => {

  const [plant, setPlant] = useState(initialPlant)
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`/plants/${props.cid}`)
      .then(res=> {
        setPlant(res.data);
      })
      .catch(err=> {
        console.log('error', err);
      })
  })


  const handleChange = (e) => {
    let value = e.target.value;
    setPlant({
      ...plant,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('plant: ', plant);
    axiosWithAuth()
      .put(`/plants/${props.cid}`, plant)
      .then((res) => {
        setPlant(res.data);
        push('/Plants');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return(
    <div className='update-form-container'>
      <form onSubmit={handleSubmit}>

      <label>
          Nickname
          <input 
          type='text'
          name='nickname'
          value={plant.nickname}
          onChange={handleChange}
           />
        </label>
        <br />

        <label>
          Species
          <input 
          type='text'
          name='species'
          value={plant.species}
          onChange={handleChange}
           />
        </label>
        <br />

        <label>
          Watering Frequency
          <input 
          type='text'
          name='h20_frequency'
          value={plant.h20_frequency}
          onChange={handleChange}
           />
        </label>
        <br />


        <label>
          Image URL
          <input 
          type='text'
          name='img_url'
          value={plant.img_url}
          onChange={handleChange}
           />
        </label>
        <br />
        
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UpdatePlant;