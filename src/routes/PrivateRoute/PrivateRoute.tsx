import React from 'react';
import { Navigate, RouteProps, Outlet } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  isSignedIn: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (
  props: PrivateRouteProps
) => {
  const { isSignedIn } = props;

  return isSignedIn ? <Outlet /> : <Navigate to='/auth' />;
};

export default PrivateRoute;
