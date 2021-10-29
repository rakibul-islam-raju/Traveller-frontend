import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { currentUser } = useAuth();

	const location = useLocation();
	const pathName = location.pathname;

	return currentUser ? (
		<Route {...rest}>{(props) => <Component {...props} />}</Route>
	) : (
		<Redirect
			{...rest}
			to={{
				pathname: "/login",
				state: {
					prevLocation: pathName,
				},
			}}
		/>
	);
};

export default PrivateRoute;
