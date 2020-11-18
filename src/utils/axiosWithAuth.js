import axios from 'axios';

const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://water-my-plants-buildweek.herokuapp.com/api',
    headers: {
      Authorization: token
    }
  })
}

export default axiosWithAuth;