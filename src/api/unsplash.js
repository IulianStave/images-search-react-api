// code related to configuration of axios,
// to unsplash to accept our request
import axios from 'axios';

/*
//an alternative
const searchImages = (term) => {

}

*/

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 
      'Client-ID b77df092bedc33ccf66e908bac6f01ac2aa906c7a73c0acb4f46b1fc7aab6114'
  }
});

