import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../Utils/Utils";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import Error from "../Error";

const Events = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	// fetch events
	useEffect(() => {
		setError("");
		setLoading(true);
		axios
			.get(`${baseUrl}/events`)
			.then((res) => {
				setEvents(res.data.result);
				setLoading(false);
			})
			.catch((err) => {
				setError("Something went wrong! Please try again later.");
				setLoading(false);
			});
	}, []);

	return (
		<section className="wrapper mt-16">
			{error && <Error text={error} />}
			{loading && (
				<div className="flex justify-center">
					<Loading />
				</div>
			)}

			<h4 className="text-3xl uppercase border-l-4 pl-2 border-teal-600 inline-block mt-4">
				Current Events
			</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
				{events
					.slice(0)
					.reverse()
					.map((event) => (
						<div key={event._id} className="group">
							<img
								className="w-full h-64"
								src={event.image}
								alt={event.title}
							/>
							<div className="text-center mx-4 p-4 shadow bg-white group-hover:bg-teal-500 transform -mt-24 transition duration-300">
								<div className="">
									<h5 className="text-xl my-2 text-black uppercase group-hover:text-white transition duration-300 ease-liner overflow-hidden">
										{event.title}
									</h5>
									<p className="group-hover:text-gray-100 transition duration-300 ease-liner mb-2 overflow-hidden">
										{event.description.substring(0, 140) +
											"..."}
									</p>
								</div>
								<Link
									to={`/registration/${event._id}`}
									className="text-teal-500 border-b-2 border-teal-500 group-hover:border-white group-hover:text-white text-white uppercase tracking-wide transition duration-300 ease-liner"
								>
									Book Now
								</Link>
							</div>
						</div>
					))}
			</div>
		</section>
	);
};

export default Events;
