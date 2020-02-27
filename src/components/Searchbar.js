import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
    
  handleSearch = () => {
        this.context.router.push(`'/search/${this.state.query}/some-action'`);
  }
    render() {
      return (
        <div className="Searchbar">
          <form>
            <input
              type="text"
              placeholder="Cari Podcast..."
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
              className="Search"
            /><button className="Submit"><img src="./icons/search.png" alt="Search Icon" width="16px" /> Cari</button>
          </form>
        </div>
      );
    }
  }
export default SearchBar;