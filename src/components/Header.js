import React from 'react';
import styled from "@emotion/styled";
import logo from '../podspace.png';

class Header extends React.Component {
    render() {
      const Header = styled.header`
      background-color: #fff;
      border-bottom:double 2px #650d88;
      color: black;
      padding-bottom: 10px;
      text-align: center;
    `;
      return (
        <Header>
          <img src={logo} alt="logo" />
        </Header>
      );
    }
  }
export default Header;