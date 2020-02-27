import React, {Suspense} from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
/** @jsx jsx */
import {css, jsx} from "@emotion/core";

class PodcastRow extends React.Component {
    render() {
      const podcast = this.props.podcast;
      
      return (
        
        <Row css={css`
        border: 1px solid #650d88;
        margin: 10px;
      `}>
          <Col lg={3} md={3} sm={12} xs={12} >
            <Suspense fallback={<div align="center"><h1>Loading...</h1></div>}>
              <img src={podcast.thumbnail} alt={podcast.title} css={css`width:100%;min-width:150px;max-width:300px;`} />
            </Suspense>
          </Col>
          <Col lg={9} md={9} sm={12} xs={12}>
            <h3>{podcast.title}</h3>
            <p>{podcast.url}</p>
            <Link to={"/detail/"+podcast.id} css={css`background: #650d88;color: #fff;padding: 10px;`}>Lihat >></Link>
            <br />
          </Col>
        </Row>
      );
    }
  }
export default PodcastRow;