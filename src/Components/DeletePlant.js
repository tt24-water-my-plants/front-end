import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import './componentStyles/DeletePlant.css'


const DeletePlant = (props) => {

// props.setPlants props.plants
  console.log(props.plants);
  console.log(props);

  const handleDelete = () => {
    console.log('deleting');
    axiosWithAuth()
  .delete(`/plants/${props.data.cid}`)
  .then((res)=>{
      console.log('res.data: ', res.data);
      window.location.reload();
      // props.setPlants()
  })
  .catch((err)=>{
      console.log(err)
  })
  }
  // console.log('props: ', props)

  return(
    <div className='delete-button' onClick={handleDelete}>Delete</div>
  )
}
export default DeletePlant