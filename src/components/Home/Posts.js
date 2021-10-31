import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../Utils/Utils";
import Error from "../Error";
import Loading from "../Loading";

const Posts = () => {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	// fetch blog posts
	useEffect(() => {
		setError("");
		setLoading(true);
		axios
			.get(`${baseUrl}/blog`)
			.then((res) => {
				setBlogs(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setError("Something went wrong! Please try again later.");
				console.log(err);
				setLoading(false);
			});
	}, []);

	return (
		<>
			{error && <Error text={error} />}
			{loading && (
				<div className="flex justify-center">
					<Loading />
				</div>
			)}
			<h4 className="text-xl mb-4 mt-4 uppercase border-l-4 pl-2 border-teal-600 inline-block">
				Recent posts
			</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
				{blogs.map((blog) => (
					<div key={blog._id} className="shadow p-3">
						<img className="w-full h-52" src={blog.image} alt="" />
						<h4 className="text-xl mt-4 mb-2">{blog.title}</h4>
						<p>{blog.description}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default Posts;
