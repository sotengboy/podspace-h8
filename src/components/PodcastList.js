import React, {Suspense, lazy} from 'react';
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
          <Suspense fallback={<div align="center"><h3>Loading Podcasts...</h3></div>}>
          <PodcastRow
            podcast={podcast}
            key={podcast.title}
          />
          </Suspense>
        );
      });
      return (
        <div>
          {rows}
        </div>
      );
    }
  }
export default PodcastList;