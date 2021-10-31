import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { useParams } from "react-router";
import { baseUrl } from "../Utils/Utils";
import Error from "../components/Error";
import { useHistory } from "react-router";

const Registration = () => {
	const { currentUser } = useAuth();

	const [loading, setLoading] = useState(false);
	const [fullName, setFullName] = useState(currentUser.displayName);
	const [email, setEmail] = useState(currentUser.email);
	const [event, setEvent] = useState();
	const [error, setError] = useState("");

	const { eventID } = useParams();
	const history = useHistory();

	// fetch specific event
	useEffect(() => {
		setLoading(true);
		axios
			.get(`${baseUrl}/event/${eventID}`)
			.then((res) => {
				setEvent(res.data.title);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setError("Something went wrong! Please try again later.");
				setLoading(false);
			});
	}, [eventID]);

	// on form submit
	const handleSubmit = (e) => {
		e.preventDefault();
		const newRegister = { fullName, email, event, status: false };
		setError("");
		setLoading(true);
		axios
			.post(`${baseUrl}/register`, newRegister)
			.then((res) => {
				if (res.data.insertedId) {
					alert("Registration Seccessfull");
					history.push("/my-events");
				}
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setError("Something went wrong! Please try again later.");
				setLoading(false);
			});
	};

	return (
		<section className="mt-32 wrapper">
			<div className="flex justify-center">
				<div className="w-full md:w-6/12 shadow-lg p-8 ">
					<h4 className="text-4xl border-l-4 border-teal-500 pl-2 uppercase mb-4">
						Event Registration
					</h4>

					{error && (
						<div className="mb-6">
							<Error text={error} />
						</div>
					)}

					<form onSubmit={handleSubmit} className="mt-8">
						<label htmlFor="fullName">Full Name</label>
						<input
							className="form-control"
							placeholder="Full Name"
							type="text"
							name="fullName"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
						/>
						<label htmlFor="email">Email</label>
						<input
							className="form-control"
							placeholder="Email"
							type="email"
							name="email"
							value={email}
						/>
						<label htmlFor="event">Select Event</label>
						<select className="form-control" name="event">
							<option value={event}>{event}</option>
						</select>

						{loading ? (
							<div className="flex justify-center mt-8">
								<Loading />
							</div>
						) : (
							<button
								className="btn btn-primary w-full"
								type="submit"
							>
								Register
							</button>
						)}
					</form>
				</div>
			</div>
		</section>
	);
};

export default Registration;
