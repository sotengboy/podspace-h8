import React from 'react';
/** @jsx jsx */
import {css, jsx} from "@emotion/core";

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
        <div css={css`
        border: 2px solid #650d88;
        border-radius: 5px;
        overflow: auto;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        margin: 10px;
        `}>
          <form>
            <input
              type="text"
              placeholder="Cari Podcast..."
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
              css={css`
              border: 0px;
              padding: 10px 10px;
	            width: 93%;
              `}
            /><button css={css`
            background-color: #650d88 ;
            border: 0px;
            color: #fff;
            cursor:pointer;
            float: right;
            padding: 10px;
            `}><img src="./icons/search.png" alt="Search Icon" width="16px" /> Cari</button>
          </form>
        </div>
      );
    }
  }
export default SearchBar;