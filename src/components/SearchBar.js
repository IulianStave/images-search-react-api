import React from 'react';

class SearchBar extends React.Component {
 
  render () {
    const searchLabel="Image search";
    
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label for="carInput">{ searchLabel }</label>
            <input id="carInput" type="text"/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;