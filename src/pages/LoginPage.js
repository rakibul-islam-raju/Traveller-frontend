import { useState } from "react";
import { useHistory } from "react-router";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = (props) => {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { state = {} } = props.location;
	const { prevLocation } = state;

	const { googleLogin } = useAuth();

	const history = useHistory();
	const redirectUrl = prevLocation || "/";

	// google login
	const handleGoogleSignin = async () => {
		try {
			setError("");
			setLoading(true);
			await googleLogin();
			history.push(redirectUrl);
		} catch (error) {
			setError("Faild to login");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="wrapper mt-48">
			<div className="flex justify-center">
				<div className="w-full md:w-4/12 shadow-lg p-8 ">
					<h4 className="text-4xl border-l-4 border-teal-500 pl-2 uppercase mb-8">
						Login
					</h4>

					{error && (
						<div className="mb-6">
							<Error text={error} />
						</div>
					)}

					{loading ? (
						<div className="flex justify-center mt-8">
							<Loading />
						</div>
					) : (
						<button
							onClick={handleGoogleSignin}
							className="btn btn-primary w-full"
							type="button"
						>
							Login with Google
						</button>
					)}
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
