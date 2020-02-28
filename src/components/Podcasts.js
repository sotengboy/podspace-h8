import React from 'react';

import SearchBar from './Searchbar';
import PodcastList from './PodcastList';

class Podcasts extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          filterText: '',
        };
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange}
          />
          <PodcastList
            podcasts={this.props.podcasts}
            filterText={this.state.filterText}
          />
        </div>
      );
    }
  }
export default Podcasts;