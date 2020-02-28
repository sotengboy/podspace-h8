import React, {Suspense, lazy} from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './css/App.css';
import loaderimg from './images/load.gif';

import Api from './api/Api';
import Routes from './components/Routes';

const Header = lazy(() => import('./components/Header'));;

class App extends React.Component {
  render (){
    return (
      <Row data-testid="app">
        <Col xs={12} sm={12} md={12} lg={12}>
          <Api>
          <Suspense fallback={<div><img src={loaderimg} alt="Loading" /></div>}>
            <Header />
          </Suspense>
            <Routes />
          </Api>
        </Col>
      </Row>
    );
  }
}

export default App;