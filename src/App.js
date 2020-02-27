import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Detail from './components/Detail';

import logo from './podspace.png';
import './css/App.css';

class PodCasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <PodcastList
          podcasts={this.props.podcasts}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
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
                <Link to={"/detail/"+podcast.id} className="Detail-button">Lihat >></Link>
              </td>
            </tr>
          </table>
        </li>
      </ul>
    );
  }
}
class PodcastList extends React.Component {
  render() {
    const filterText = this.props.filterText;

    const rows = [];

    this.props.podcasts.forEach((podcast) => {
      if (podcast.title.indexOf(filterText) === -1) {
        return;
      }
      rows.push(
        <PodcastRow
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

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <div className="Searchbar">
        <form>
          <input
            type="text"
            placeholder="Cari Podcast..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
            className="Search"
          /><button className="Submit"><img src="./icons/search.png" alt="Search Icon" width="16px" /> Cari</button>
        </form>
      </div>
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
        <Switch>
          <Route exact path="/">
            <PodCasts podcasts={this.state.podcasts} />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;