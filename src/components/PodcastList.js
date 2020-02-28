import React, {Suspense, lazy} from 'react';
/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const PodcastRow = lazy(() => import('./PodcastRow'));

class PodcastList extends React.Component {
    render() {
      const filterText = this.props.filterText;
  
      const rows = [];
  
      this.props.podcasts.forEach((podcast) => {
        if (podcast.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
          return;
        }
        rows.push(
          <Suspense fallback={<div align="center"><h3>Loading Podcasts...</h3></div>} key={podcast.id.toString()}>
            <PodcastRow podcast={podcast} />
          </Suspense>
        );
      });
      return (
        <div css={styles.container}>
          {rows}
        </div>
          
      );
    }
  }
const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 100%;
  `
}
export default PodcastList;