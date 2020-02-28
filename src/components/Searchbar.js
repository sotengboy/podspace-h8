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
        <div css={styles.searchbar}>
            <form>
              <input
                type="text"
                placeholder="Cari Podcast..."
                value={this.props.filterText}
                onChange={this.handleFilterTextChange}
                css={styles.input}
              />
              <button css={styles.submit}>
                <img src="./icons/search.png" alt="Search Icon" width="16px" /> Cari</button>
            </form>
        </div>
      );
    }
  }
const styles = {
  searchbar: css`
  border: 2px solid #650d88;
  border-radius: 5px;
  margin: 10px;
	overflow: auto;
	-moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  `,
  input: css`
  border: 0px;
  font-size: 16px;
  padding: 10px 10px;
  width: 67%;
  &:focus {
    outline: 0;
  }
  `,
  submit: css`
  background-color: #650d88 ;
  border: 0px;
	color: #fff;
	cursor:pointer;
	float: right;
	padding: 10px;`
}
export default SearchBar;