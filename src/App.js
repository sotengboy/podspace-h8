import React, {Suspense, lazy} from 'react';
import loaderimg from './images/load.gif';

import Provider from './provider/Provider';
import Routes from './components/Routes';

const Header = lazy(() => import('./components/Header'));;

class App extends React.Component {
  render (){
    return (
      <div data-testid="app">
          <Provider>
            <Suspense fallback={<div><img src={loaderimg} alt="Loading" /></div>}>
              <Header />
            </Suspense>
            <Routes />
          </Provider>
      </div>
    );
  }
}

export default App;