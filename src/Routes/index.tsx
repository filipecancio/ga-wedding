import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';

const Index: React.FC = props => {
      return (
        <>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </BrowserRouter>
        </>
      );
    }

export default Index;