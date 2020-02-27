import React from 'react';
import axios from 'axios';
import { Row, Col } from 'react-flexbox-grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './css/App.css';

import Header from './components/Header';
import SearchBar from './components/Searchbar';
import PodcastList from './components/PodcastList';
import Detail from './components/Detail';

class PodCasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
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
      <Row data-testid="app">
        <Col xs={12} sm={12} md={12} lg={12}>
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
        </Col>
      </Row>
    );
  }
}

export default App;