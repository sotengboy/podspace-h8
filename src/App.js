import React, { Suspense, lazy } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import logo from './podspace.png';
import './css/App.css';

import Detail from './components/Detail';

const PodcastList = lazy(() => import('./components/PodcastList'));

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
        <Suspense fallback={<div align="center"><h1>Loading...</h1></div>}>
        <PodcastList
          podcasts={this.props.podcasts}
          filterText={this.state.filterText}
        />
        </Suspense>
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
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
handleSearch = () => {
      this.context.router.push(`'/search/${this.state.query}/some-action'`);
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