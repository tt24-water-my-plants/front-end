import React from 'react';

const UpdatePlant = () => {

  return(
    <div className='update-form-container'>
      <form>

      <label>
          Nickname
          <input 
          type='text'
          name='nickname'
          // value={}
           />
        </label>

        <label>
          Image URL
          <input 
          type='text'
          name='img_url'
          // value={}
           />
        </label>

        <label>
          Species
          <input 
          type='text'
          name='species'
          // value={}
           />
        </label>

        <label>
          Watering Frequency
          <input 
          type='text'
          name='h2o_frequency'
          // value={}
           />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UpdatePlant;