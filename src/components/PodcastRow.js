import React, {Suspense} from 'react';
import { Link } from "react-router-dom";
/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import loaderimg from '../images/load.gif';

class PodcastRow extends React.Component {
    render() {
      const podcast = this.props.podcast;
      
      return (
        <ul css={styles.ul}>
          <li css={styles.li}>
            <div css={styles.thumbnail}>
            <Suspense fallback={<div><img src={loaderimg} alt="Loading" /></div>}>
              <img src={podcast.thumbnail} alt={podcast.title} css={styles.thumbnail} />
            </Suspense>
            </div>
            <div css={styles.content}>
            <h3>{podcast.title}</h3>
            <p>{podcast.url}</p>
            <Link to={"/detail/"+podcast.id} css={styles.link}>Lihat >></Link>
            </div>
          </li>
        </ul>
      );
    }
  }
  const styles = {
    ul: css`
      list-style: none; 
    `,
    li: css`
      
        border: 1px solid #650d88;
        height: 100%;
        margin-left: -15px;
        width:100%;        
    `,
    thumbnail: css`
      float:left;
      margin-right: 10px;
      max-width:350px;
      width:100%;`,
    content: css`
      padding-left:10px;`,
    link: css`
      background: #650d88;
      color: #fff;
      padding: 10px;`

  };
export default PodcastRow;