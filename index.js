const axios = require('axios');

const apiUrl = 'https://fakestoreapi.com/users/1';

axios.get(apiUrl)
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

const newData = {
    id: 1,
    username: 'saiswaroop',
    email: 'swaroop@gmail.com',
};
  
axios.put(apiUrl, newData)
    .then(response => {
        console.log('Updated data:', response.data);
    })
    .catch(error => {
      console.error('Error updating data:', error);
    });