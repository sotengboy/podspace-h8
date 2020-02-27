import React from 'react';
import axios from 'axios';
import {Link, Router} from '@reach/router';
import logo from './logo.svg';
import './css/App.css';

class PodcastList extends React.Component {
  render() {
	  const podcasts = this.props.podcasts;
    return (
      <div>
        <SearchBar />
		<div>
			<ul>
			{podcasts.map(podcast => 
				<li>{podcast.title}</li>
			)}
			</ul>
		</div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="50px" />
        <p>
          Podspace
        </p>
      </header>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Cari Podcast..."
          
        /><button>Cari</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    podcasts: []
  }

  componentDidMount() {
    axios.get(`https://json-server-heroku-svoqwyfacm.now.sh/podcasts`)
      .then(res => {
        const podcasts = res.data;
        this.setState({ podcasts });
      })
  }
  render (){
    return (
      <div className="App">
        <Header />
        <Router>
            <PodcastList path="/" podcasts={this.state.podcasts} />
        </Router>
      </div>
    );
  }
}

export default App;