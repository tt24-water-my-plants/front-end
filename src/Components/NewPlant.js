import React from 'react';
import './componentStyles/NewPlant.css';




const NewPlant = () => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('click!');
  }


  return(
    <div className='form-container'>
      <form className='add-plant-form' onSubmit={handleSubmit}>
      <label>
          <input 
            type='text'
            name='name' 
            placeholder='image url'
             />
        </label>
        <label>
          <input 
            type='text'
            name='name' 
            placeholder='name'
             />
        </label>
        <label>
          <input 
            type='text'
            name='name' 
            placeholder='h2o frequency'
             />
        </label>

        <button className='add-plant-button'>Submit</button>
      </form>
    </div>
  )
}

export default NewPlant