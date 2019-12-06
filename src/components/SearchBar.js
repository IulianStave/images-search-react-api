import React from 'react';

class SearchBar extends React.Component {
  render () {
    return (
      <div>
        <form>
          <label for="carInput">Enter car: </label>
          <input id="carInput" type="text"/>
        </form>
      </div>
    );
  }
}

export default SearchBar;