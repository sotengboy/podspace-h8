import React from 'react';
import axios from 'axios';
/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import styled from '@emotion/styled';
class Data extends React.Component {
    
    state = {
        podcasts: []
      }
    
      componentDidMount() {
        const id = this.props.id;
        axios.get(`https://json-server-heroku-svoqwyfacm.now.sh/podcasts?id=`+id)
          .then(res => {
            const podcasts = res.data;
            this.setState({ podcasts });
          })
          
      }
    render() {
        const Table = styled.table`
        display: flex;
        align-items: center;
        border: 1px solid #650d88;
        margin: 10px;
        @media (max-width: 778px) {
          flex-direction: column;
          align-items: flex-start;
        }
      `;
        return (
          <div css={css`height: 350px;width:100%;`}>
            
                    <Table>
                    { this.state.podcasts.map(podcast => 
                        <tr>
                            <td><img src={podcast.thumbnail} alt={podcast.title} css={css`width:100%;min-width:100px;max-width:400px;padding-right:20px`} /></td>
                            <td>
                                <h3>{podcast.title}</h3>
                                <p><a href={podcast.url}>{podcast.url}</a></p>
                                Episodes:
                                {podcast.episodes ? (
                                        <Episodes episodes={podcast.episodes} />
                                    ) : (
                                        <p>Tidak ada episode</p>
                                    )}
                                    <a href="/" className="Detail-button">{'<<'} Kembali</a>
                            </td>
                        </tr>
                    )}
                    </Table>
        
          </div>  
        );
    }
}
class Episodes extends React.Component {
    render(){
        const episodes = this.props.episodes;
    return (
        <div>
    {episodes.map(item => 
        <p>
            <audio controls>
                <source src={item.audio}></source>
            </audio></p>
        )}
        </div>
    );
    }
}
export default Data;