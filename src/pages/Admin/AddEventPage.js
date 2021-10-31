import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../Utils/Utils";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const AddEventPage = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [event, setEvent] = useState({
		title: "",
		image: "",
		description: "",
	});

	// form on change
	const handleChange = (e) => {
		setEvent({
			...event,
			[e.target.name]: e.target.value,
		});
	};

	// on form submit
	const handleSubmit = (e) => {
		e.preventDefault();
		setError("");

		// do validation
		if (event.title.length < 8) {
			setError("Title's length should be longer than 8 characters");
			return;
		}
		if (event.description.length < 20) {
			setError(
				"Description's length should be longer than 50 characters"
			);
			return;
		}
		if (event.image.length < 8) {
			setError("Urls's length should be longer than 8 characters");
			return;
		}
		setLoading(true);
		// data post
		axios
			.post(`${baseUrl}/events`, event)
			.then((res) => {
				if (res.data.insertedId) {
					alert("Event Added");
					setEvent({
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
					New Event
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
						value={event.title}
					/>
					<label htmlFor="image">Image URL</label>
					<input
						className="form-control"
						placeholder="URL"
						type="text"
						name="image"
						onChange={handleChange}
						value={event.image}
					/>
					<label htmlFor="description">Description</label>
					<textarea
						className="form-control"
						placeholder="Description"
						type="text"
						name="description"
						onChange={handleChange}
						value={event.description}
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

export default AddEventPage;
