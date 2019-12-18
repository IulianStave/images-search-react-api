import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
  state = {images: [] };
  
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
        params: {query: term} 
      });
    
      this.setState({ images: response.data.results });
  }
  
  render () {
    const containerStyle = {marginTop: '10px'};
    
    return (
    <div className="ui container" style={ containerStyle }>
      {/* the prop name 'onSubmit' can be whatever we choose  */}
      <SearchBar onSubmit={this.onSearchSubmit}/>
      {/* Found: {this.state.images.length} images */}
      <ImageList images = {this.state.images} />
    </div>
    );
  }
}

export default App;
