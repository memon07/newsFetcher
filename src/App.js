import React from 'react';
import { Provider } from 'react-redux'

import { Router } from 'react-router'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Switch, Route} from 'react-router-dom';
import history from './history'

import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/createStore';


import Signup from './components/Signup';
import HomeHOC from './components/HomeHOC';
import HistoryHOC from './components/HistoryHOC'

function App() {

    return (        
        <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
            <Router history={history}>
                <Switch>
                    <Route exact path="/"  component={Signup} />
                    <Route exact path='/dashboard' component={HomeHOC} />
                    <Route exact path='/history' component={HistoryHOC} />
                </Switch>
            </Router>
        </PersistGate>
      </Provider>
    )
}
    
export default App
    
    