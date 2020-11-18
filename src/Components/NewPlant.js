import React from 'react';
import { useState } from 'react';

import './componentStyles/NewPlant.css';

const initialPlant = {
  id: null,
  species: '',
  h2o_frequency: '',
  img_url: ''
}


const NewPlant = (props) => {
  const [ formVal, setFormVal ] = useState(initialPlant);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = formVal;
    console.log(data);
    console.log('click!');
  }

  const handleChanges = (e) => {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    setFormVal({
      ...formVal,
      [name]: value,
    });
    console.log('new values: ', formVal)
  }


  return(
    <div className='form-container'>
      <form className='add-plant-form' onSubmit={handleSubmit}>
      <label>
          <input 
            type='text'
            name='image_url' 
            placeholder='image url'
            onChange={handleChanges}
            value={formVal.img_url}
             />
        </label>
        <label>
          <input 
            type='text'
            name='species' 
            placeholder='species'
            onChange={handleChanges}
            value={formVal.species}
             />
        </label>
        <label>
          <input 
            type='text'
            name='h2o_frequency' 
            placeholder='h2o frequency'
            onChange={handleChanges}
            value={formVal.h2o_frequency}
             />
        </label>

        <button type='submit' className='add-plant-button'>Submit</button>
      </form>
    </div>
  )
}

export default NewPlant