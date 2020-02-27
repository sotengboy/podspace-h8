import React from 'react';
import logo from '../podspace.png';

class Header extends React.Component {
    render() {
      return (
        <header className="App-header">
          <img src={logo} alt="logo" />
        </header>
      );
    }
  }
export default Header;