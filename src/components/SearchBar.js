import React from 'react';


class SearchBar extends React.Component {
  state = { term: ''};

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
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