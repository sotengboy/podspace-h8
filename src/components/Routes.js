import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ApiContext from '../api/ApiContext';
import loaderimg from '../images/load.gif';

const Podcasts = lazy(() => import('./Podcasts'));
const Detail = lazy(() => import('./Detail'))

class Routes extends React.Component {
    render() {
    return (
      <ApiContext.Consumer>
        {(context) => (  
          <Router>
            <Switch>
              <Route exact path="/">
                <Suspense fallback={<div><img src={loaderimg} alt="Loading" /></div>}>
                  <Podcasts podcasts={context.state.podcasts} />
                </Suspense>
              </Route>
              <Route path="/detail/:id">
                <Suspense fallback={<div><img src={loaderimg} alt="Loading" /></div>}>
                  <Detail podcasts={context.state.podcasts} />
                </Suspense>
              </Route>
            </Switch>
          </Router>
        )}
      </ApiContext.Consumer>
    )
  }
}
export default Routes;