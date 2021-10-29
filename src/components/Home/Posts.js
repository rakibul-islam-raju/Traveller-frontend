import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../Utils/Utils";
import { Link } from "react-router-dom";
import Cover from "../../assets/images/cover.jpg";

const Posts = () => {
	const [events, setEvents] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		setError("");
		setLoading(true);
		axios
			.get(`${baseUrl}/events`)
			.then((res) => setEvents(res.data.result))
			.catch((err) => {
				setError("Something went wrong! Please try again later.");
				console.log(err);
			})
			.finally(setError(false));
	}, []);
	return (
		<>
			<h4 className="text-xl mb-4 mt-4 uppercase border-l-4 pl-2 border-teal-600 inline-block">
				Recent posts
			</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
				<div className="shadow p-3">
					<img className="w-full h-52" src={Cover} alt="" />
					<h4 className="text-xl mt-4 mb-2">
						Lorem ipsum dolor sit amet
					</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Laboriosam nesciunt libero deleniti pariatur....
					</p>
				</div>
			</div>
		</>
	);
};

export default Posts;
