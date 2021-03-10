import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({
  component: Component,
  user,
  authRedirect,
  hostRedirect,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user && !authRedirect) {
          return <Component {...rest} {...props} />;
        } else if (user && hostRedirect && user.role_id === 1) {
          return <Redirect exact from={rest.path} to={hostRedirect} />;
        } else if (user && authRedirect && user.role_id === 0) {
          return <Redirect exact from={rest.path} to={authRedirect} />;
        } else if (!user && !authRedirect) {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        } else {
          return <Component {...rest} {...props} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
