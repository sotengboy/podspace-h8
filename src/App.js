import React, { Suspense, lazy } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './css/App.css';

import Header from './components/Header';
import SearchBar from './components/Searchbar';
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