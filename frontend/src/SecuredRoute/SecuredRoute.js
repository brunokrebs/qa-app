import React from 'react';
import {Route} from 'react-router-dom';
import auth0Client from '../Auth';

function SecuredRoute(props) {
  const {component: Component, path} = props;
  return (
    <Route path={path} render={() => {
        if (checkingSession) {
          auth0Client.signIn();
          return <h3 className="text-center">Validating session...</h3>;
        }
        return <Component />
    }} />
  );
}

export default SecuredRoute;