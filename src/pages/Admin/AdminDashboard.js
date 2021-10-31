import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { baseUrl } from "../../Utils/Utils";

const AdminDashboard = () => {
	const [registerList, setRegisterList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [reload, setReload] = useState(false);

	// fetch register list
	useEffect(() => {
		setLoading(true);
		axios
			.get(`${baseUrl}/register-list`)
			.then((res) => {
				setRegisterList(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setError("Something went wrong! Please try again later.");
				setLoading(false);
			})
			.finally(setReload(false));
	}, [reload]);

	// delete function
	const deleteHandler = (id) => {
		setError("");
		const proceed = window.confirm(
			"Are you sure, you want to delete the user?"
		);
		if (proceed) {
			setLoading(true);
			axios
				.delete(`${baseUrl}/register/${id}`)
				.then((res) => {
					if (res.data.deletedCount > 0) {
						alert("Deleted successfully");
						const remainingRegister = registerList.filter(
							(user) => user._id !== id
						);
						setRegisterList(remainingRegister);
					}
					setLoading(false);
				})
				.catch((err) => {
					setError("Something went wrong! Please try again later.");
					setLoading(false);
				});
		}
	};

	// update function
	const updateStatus = (_id, status) => {
		setError("");
		setLoading(true);
		axios
			.put(`${baseUrl}/register/${_id}`, { status: !status })
			.then((res) => {
				if (res.data.modifiedCount > 0) {
					alert("Status Updated");
					setReload(true);
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
		<section className="mt-32 wrapper">
			<h2 className="text-2xl border-l-4 border-teal-500 pl-2 uppercase">
				Dashboard
			</h2>

			<div className="my-4">
				{error && (
					<div className="mb-6">
						<Error text={error} />
					</div>
				)}
				{loading && (
					<div className="flex justify-center">
						<Loading />
					</div>
				)}
			</div>

			<div className="flex justify-end space-x-4">
				<Link to="/admin/add-event" className="btn btn-primary">
					Add Event
				</Link>
				<Link to="/admin/add-blog" className="btn btn-primary">
					Add Blog
				</Link>
			</div>
			<div className="flex flex-col mt-8">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table class="min-w-full divide-y divide-gray-200">
								<thead class="bg-gray-50">
									<tr>
										<th
											scope="col"
											class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Event
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Full Name
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Email
										</th>
										<th
											scope="col"
											class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Status
										</th>
										<th
											scope="col"
											class="relative px-6 py-3"
										>
											<span class="sr-only">Action</span>
										</th>
									</tr>
								</thead>
								<tbody class="bg-white divide-y divide-gray-200">
									{registerList.map((register) => (
										<tr key={register._id}>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="flex items-center">
													<div class="">
														<div class="text-sm font-medium text-gray-900">
															{register.event}
														</div>
													</div>
												</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-900">
													{register.fullName}
												</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												{register.email}
											</td>
											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												<button
													onClick={() =>
														updateStatus(
															register._id,
															register.status
														)
													}
													type="button"
													class={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
														register.status
															? "bg-green-100 text-green-800"
															: "bg-yellow-100 text-yellow-800"
													}`}
												>
													{register.status
														? "Approved"
														: "Pending"}
												</button>
											</td>
											<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<button
													onClick={() =>
														deleteHandler(
															register._id
														)
													}
													type="button"
													class="text-red-600 bg-red-100 rounded-xl px-2 font-semibold"
												>
													Delete
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AdminDashboard;
