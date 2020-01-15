/**
 *
 * Main
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../homePage';
import { ErrorBoundary } from '../../components/errorBoundry';
import { Oops } from '../oops';
function Main() {
  return (
    <>
      <Helmet titleTemplate="Freedom Mobile | %s" defaultTitle="Freedom Mobile">
        <meta name="description" content="Freedom Mobile application" />
      </Helmet>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/404" component={Oops} />
        </Switch>
      </ErrorBoundary>
    </>
  );
}

Main.displayName = 'Main';

export default Main;
