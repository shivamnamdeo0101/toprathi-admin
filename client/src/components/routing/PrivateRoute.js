import { useLocation, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const user = useSelector((state) => state.userAuth.user);
  
  return (
    <Route
      {...rest}
      render={(props) =>
        Object.keys(user).length !==0 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
