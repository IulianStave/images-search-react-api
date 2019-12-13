// code related to configuration of axios,
// Creates an axios object which send a request to unsplash
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID b77df092bedc33ccf66e908bac6f01ac2aa906c7a73c0acb4f46b1fc7aab6114'
  }
});

