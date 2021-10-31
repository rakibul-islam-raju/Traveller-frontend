import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../Utils/Utils";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const AddBlogPage = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [blog, setBlog] = useState({
		title: "",
		image: "",
		description: "",
	});

	// form on-change
	const handleChange = (e) => {
		setBlog({
			...blog,
			[e.target.name]: e.target.value,
		});
	};

	// on form submit
	const handleSubmit = (e) => {
		e.preventDefault();
		setError("");

		// do validation
		if (blog.title.length < 8) {
			setError("Title's length should be longer than 8 characters");
			return;
		}
		if (blog.description.length < 20) {
			setError(
				"Description's length should be longer than 50 characters"
			);
			return;
		}
		if (blog.image.length < 8) {
			setError("Urls's length should be longer than 8 characters");
			return;
		}
		setLoading(true);
		// data post
		axios
			.post(`${baseUrl}/blog`, blog)
			.then((res) => {
				if (res.data.insertedId) {
					alert("Blog Added");
					setBlog({
						title: "",
						image: "",
						description: "",
					});
				}
				setLoading(false);
			})
			.catch((err) => {
				setError("Something went wrong! Please try again later.");
				console.log(err);
				setLoading(false);
			});
	};

	return (
		<section className="wrapper mt-32">
			<div className="w-6/12 mx-auto">
				<h2 className="text-2xl border-l-4 border-teal-500 pl-2 uppercase mb-8">
					New Blog
				</h2>

				{error && (
					<div className="mb-6">
						<Error text={error} />
					</div>
				)}

				<form onSubmit={handleSubmit} className="">
					<label htmlFor="title">Title</label>
					<input
						className="form-control"
						placeholder="Title"
						type="text"
						name="title"
						onChange={handleChange}
						value={blog.title}
					/>
					<label htmlFor="image">Image URL</label>
					<input
						className="form-control"
						placeholder="URL"
						type="text"
						name="image"
						onChange={handleChange}
						value={blog.image}
					/>
					<label htmlFor="description">Description</label>
					<textarea
						className="form-control"
						placeholder="Description"
						type="text"
						name="description"
						onChange={handleChange}
						value={blog.description}
					></textarea>

					{loading ? (
						<div className="flex justify-center mt-8">
							<Loading />
						</div>
					) : (
						<button
							className="btn btn-primary w-full"
							type="submit"
						>
							Submit
						</button>
					)}
				</form>
			</div>
		</section>
	);
};

export default AddBlogPage;
