import React from 'react';
import Loading from './Loading';
import PodcastRow from './PodcastRow';
const LoadingPodcastRow = Loading(PodcastRow);
class PodcastList extends React.Component {
    render() {
      const filterText = this.props.filterText;
  
      const rows = [];
  
      this.props.podcasts.forEach((podcast) => {
        if (podcast.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
          return;
        }
        rows.push(
          <LoadingPodcastRow
            podcast={podcast}
            key={podcast.title}
          />
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