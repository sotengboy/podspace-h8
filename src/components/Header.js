import React from 'react';
import styled from "@emotion/styled";
import { Row, Col } from 'react-flexbox-grid';

import logo from '../podspace.png';

class Header extends React.Component {
    render() {
      const Header = styled.header`
      background-color: #fff;
      border-bottom:solid 2px #650d88;
      color: black;
      text-align: center;
    `;
      return (
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Header>
              <img src={logo} alt="logo" />
            </Header>
          </Col>
        </Row>
      );
    }
  }
export default Header;