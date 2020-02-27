import React from 'react';
/** @jsx jsx */
import {css, jsx} from "@emotion/core";

class PodcastRow extends React.Component {
    render() {
      const podcast = this.props.podcast;
      
      return (
        <ul css={css`
        list-style: none;
        `}>
          <li css={css`
            border: 1px solid #650d88;
            margin: 20px;
            margin-left: -15px;
            padding: 10px;
          `}>
            <table>
              <tr>
                <td css={css`
                  padding-right: 10px;
                `}><img src={podcast.thumbnail} alt={podcast.title} width="150px" height="150px" /></td>
                <td>
                  <h3>{podcast.title}</h3>
                  <p>{podcast.url}</p>
                  <a href={"/detail/"+podcast.id} css={css`background: #650d88;color: #fff;padding: 10px;`}>Lihat >></a>
                </td>
              </tr>
            </table>
          </li>
        </ul>
      );
    }
  }
export default PodcastRow;