import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
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
