import React, {Suspense, lazy} from 'react';
import loaderimg from './images/load.gif';

import Api from './api/Api';
import Routes from './components/Routes';

const Header = lazy(() => import('./components/Header'));;

class App extends React.Component {
  render (){
    return (
      <div data-testid="app">
          <Api>
            <Suspense fallback={<div><img src={loaderimg} alt="Loading" /></div>}>
              <Header />
            </Suspense>
            <Routes />
          </Api>
      </div>
    );
  }
}

export default App;