import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Registration from "./pages/Registration";
import { AuthProvider } from "./contexts/AuthContext";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import AddEventPage from "./pages/Admin/AddEventPage";
import AddBlogPage from "./pages/Admin/AddBlogPage";

function App() {
	return (
		<div className="App text-gray-600">
			<Router>
				<AuthProvider>
					<Layout>
						<Switch>
							<Route exact path="/" component={HomePage} />
							<PublicRoute
								exact
								path="/login"
								component={LoginPage}
							/>
							<PrivateRoute
								exact
								path="/registration/:eventID"
								component={Registration}
							/>
							<PrivateRoute
								exact
								path="/my-events"
								component={Dashboard}
							/>
							<PrivateRoute
								exact
								path="/admin/dashboard"
								component={AdminDashboard}
							/>
							<PrivateRoute
								exact
								path="/admin/add-event"
								component={AddEventPage}
							/>
							<PrivateRoute
								exact
								path="/admin/add-blog"
								component={AddBlogPage}
							/>
						</Switch>
					</Layout>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
