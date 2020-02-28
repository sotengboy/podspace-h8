import React from 'react';
import axios from 'axios';
/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import ApiContext from './ProviderContext';
import loaderimg from '../images/load.gif';

class Api extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            podcasts: [],
            loading: true
        }
    }
    componentDidMount() {
        axios.get(`https://json-server-heroku-svoqwyfacm.now.sh/podcasts`)
          .then(res => {
            //const podcasts = res.data;
            this.setState({ podcasts: res.data, loading: false });
          })
          
    }

    render() {
        return (
            <>
            { this.state.loading ? 
                (
                    <div css={
                    css`position: absolute;
                    left: 50%;
                    top: 50%;
                    -webkit-transform: translateX(-50%) translateY(-50%);
                    -moz-transform: translateX(-50%) translateY(-50%);
                    transform: translateX(-50%) translateY(-50%);`
                    }><img src={loaderimg} alt="Loading" /></div>
                ) : (
          <ApiContext.Provider value={{ 
              state: this.state, 
              podcastById: this.podcastById 
            }}>
            {this.props.children}
          </ApiContext.Provider>
                )}
                </>
        );
    }
}

export default Api;