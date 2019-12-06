import React from 'react';


class SearchBar extends React.Component {
  //controlled input element, its value is stored in the state
  state = { term: ''};

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
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;