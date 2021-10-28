import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";

function App() {
	return (
		<div className="App text-gray-600">
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/" component={HomePage} />
					</Switch>
				</Layout>
			</Router>
		</div>
	);
}

export default App;
