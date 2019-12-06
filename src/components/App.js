import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  render () {
    const containerStyle = {marginTop: '10px'};
    return (
    <div class="ui container" style={ containerStyle }>
      <SearchBar/>
    </div>
    );
  }
};

export default App;
