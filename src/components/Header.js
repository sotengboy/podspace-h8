import React from 'react';
import styled from "@emotion/styled";
import logo from '../images/podspace.png';

class Header extends React.Component {
    render() {
      const Header = styled.header`
      background-color: #fff;
      border-bottom:solid 2px #650d88;
      color: black;
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