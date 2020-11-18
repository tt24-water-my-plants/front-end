import React from 'react';
import './componentStyles/Plant.css';

const Plant = (props) => {
  console.log('props: ', props);
  return(
    <div className='plant-container'>
      {
        props.img_url === null ? 
        <div>
          <h3>image is null</h3>
          <h3>{props.species}</h3>
          <h3>{props.h2o_frequency}</h3> 
        </div>
        :
        <div>

          <img src={props.img_url} alt='plant' className='plant-image'/>
          <h3>{props.species}</h3>
          <h3>{props.h2o_frequency}</h3>
        </div>
      }

    </div>
  )
}

export default Plant;