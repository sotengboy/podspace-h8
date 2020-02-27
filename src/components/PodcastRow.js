import React from 'react';

class PodcastRow extends React.Component {
    render() {
      const podcast = this.props.podcast;
      
      return (
        <ul className="List-pods">
          <li>
            <table className="Tabel-pods">
              <tr>
                <td><img src={podcast.thumbnail} alt={podcast.title} width="150px" height="150px" /></td>
                <td>
                  <h3>{podcast.title}</h3>
                  <p>{podcast.url}</p>
                  <a href={"/detail/"+podcast.id} className="Detail-button">Lihat >></a>
                </td>
              </tr>
            </table>
          </li>
        </ul>
      );
    }
  }
export default PodcastRow;