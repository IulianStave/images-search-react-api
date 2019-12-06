import React from 'react';


class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
    
  }

  render () {
    const searchLabel={text: "Image search"};
    
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="imageInput">{ searchLabel.text }</label>
            <input 
              id="imageInput" 
              type="text" 
              /*onChange={this.onInputChange} */
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;