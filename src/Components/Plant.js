import React from 'react';
import './componentStyles/Plant.css';
import UpdatePlant from './UpdatePlant';
import DeletePlant from './DeletePlant';
import './componentStyles/DeletePlant.css'

const Plant = (props) => {
  // console.log('props: ', props);
  return(
    <div className='plant-container'>
      {
        props.img_url === null ? 
        <div>
          <h3>image is null</h3>
          <h3>{props.species}</h3>
          <h3>{props.h2o_frequency}</h3> 
          <UpdatePlant cid={props.cid}/>
          <DeletePlant cid={props.cid} data={props}
          setPlants={props.setPlants} plants={props.plants} />
          {/* <button onClick={()=>{DeletePlant(props.cid, props)}}>Delete Listing</button> */}
        </div>
        :
        <div>

          <img src={props.img_url} alt='plant' className='plant-image'/>
          <h3>{props.species}</h3>
          <h3>{props.h2o_frequency}</h3>
          <UpdatePlant cid={props.cid}/>
          <DeletePlant cid={props.cid} data={props} setPlants={props.setPlants} plants={props.plants}/>
          {/* <button onClick={()=>{DeletePlant(props.cid,props)}}>Delete Listing</button> */}
        </div>
      }

    </div>
  )
}

export default Plant;