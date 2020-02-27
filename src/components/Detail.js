import React from 'react';
import axios from 'axios';
import {
    useParams
  } from "react-router-dom";
  import '..//css/App.css';
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
        
        return (
          <div className="Detail-pod">
            
            <ul className="List-pods">
                <li>
                    <table className="Tabel-pods">
                    { this.state.podcasts.map(podcast => 
                        <tr>
                            <td><img src={podcast.thumbnail} alt={podcast.title} width="400px"/></td>
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
                    </table>
                </li>
            </ul>
        
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
function Detail() {
    let { id } = useParams();
    return (
        <Data id={ id } />
    )
}
export default Detail;