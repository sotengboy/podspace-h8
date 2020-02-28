import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProviderContext from '../provider/ProviderContext';
import loaderimg from '../images/load.gif';

const Podcasts = lazy(() => import('./Podcasts'));
const Detail = lazy(() => import('./Detail'))

class Routes extends React.Component {
    render() {
    return (
      <ProviderContext.Consumer>
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
      </ProviderContext.Consumer>
    )
  }
}
export default Routes;