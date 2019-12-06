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
      <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
    );
  }
}

export default App;
