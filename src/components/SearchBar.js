import React from 'react';


class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(){
    console.log("Input was clicked");
  }
  render () {
    const searchLabel={text: "Image search"};
    
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="imageInput">{ searchLabel.text }</label>
            <input id="imageInput" type="text" onClick={this.onInputClick} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;