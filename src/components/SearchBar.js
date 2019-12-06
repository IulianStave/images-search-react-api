import React from 'react';


class SearchBar extends React.Component {
  //controlled input element, its value is stored in the state
  state = { term: ''};

  // we use an arrow function to avoid this undefined error
  // will bind this
  //onFormSubmit = (event) => {
  // the alternative with onFormSubmit(event) works with passing e inside form elem
  //onFormSubmit(event) {
    //the browser no longer automatically refreshes itself
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    //console.log(this.state.term);

  }

  render () {
    const searchLabel={text: "Image search"};
    
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
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