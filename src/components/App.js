import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit(term) {
    // npm install --save axios
    // API endpoint GET /search/photos
    // make a request over the unshplash API using 
    // third party library
    // use Async await async - const response = await 
    const response = await axios
      .get('https://api.unsplash.com/search/photos',{
        params: {query: term},
        headers: {
          Authorization: 
            'Client-ID b77df092bedc33ccf66e908bac6f01ac2aa906c7a73c0acb4f46b1fc7aab6114'
        }
      });
      console.log(response.data.results);
  }
  
  render () {
    const containerStyle = {marginTop: '10px'};
    
    return (
    <div className="ui container" style={ containerStyle }>
      {/* the prop name 'onSubmit' could be whatever we choose  */}
      <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
    );
  }
}

export default App;
