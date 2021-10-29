import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Registration from "./pages/Registration";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
	return (
		<div className="App text-gray-600">
			<Router>
				<AuthProvider>
					<Layout>
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route exact path="/login" component={LoginPage} />
							<Route
								exact
								path="/registration"
								component={Registration}
							/>
							<Route
								exact
								path="/dashboard"
								component={Dashboard}
							/>
							<Route
								exact
								path="/admin/dashboard"
								component={AdminDashboard}
							/>
						</Switch>
					</Layout>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
