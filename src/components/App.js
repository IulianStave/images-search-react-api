import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
  state = {images: [] };
  //define the arrow function async
  onSearchSubmit = async (term) => {
    // npm install -- save axios
    // API endpoint GET /search/photos
    // make a request over the unsplash API using 
    // third party library axios
    // use async and await 
    // async (term) =>  const response = await axios.get
    const response = await unsplash.get('/search/photos', {
        params: {query: term} 
      });
      // console.log(this)
      this.setState({ images: response.data.results });
  }
  
  render () {
    const containerStyle = {marginTop: '10px'};
    
    return (
    <div className="ui container" style={ containerStyle }>
      {/* the prop name 'onSubmit' could be whatever we choose  */}
      <SearchBar onSubmit={this.onSearchSubmit}/>
      {/* Found: {this.state.images.length} images */}
      <ImageList />
    </div>
    );
  }
}

export default App;
