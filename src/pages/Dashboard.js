import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../Utils/Utils";
import { useAuth } from "../contexts/AuthContext";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Dashboard = () => {
	const { currentUser } = useAuth();
	const [email, setEmail] = useState(currentUser.email);
	const [registerList, setRegisterList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	// fetch registration list
	useEffect(() => {
		setLoading(true);
		axios
			.get(`${baseUrl}/register-list?email=${email}`)
			.then((res) => {
				setRegisterList(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setError("Something went wrong! Please try again later.");
				setLoading(false);
			});
	}, [email]);

	// delete function
	const unSubsceibeHandler = (id) => {
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
						setLoading(false);
					}
				})
				.catch((err) => {
					setError("Something went wrong! Please try again later.");
					setLoading(false);
				});
		}
	};

	return (
		<section className="mt-32 wrapper">
			<h2 className="text-2xl border-l-4 border-teal-500 pl-2 uppercase">
				My Events
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
													<div class="text-sm font-medium text-gray-900">
														{register.event}
													</div>
												</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<span
													class={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
														register.status
															? "bg-green-100 text-green-800"
															: "bg-yellow-100 text-yellow-800"
													}`}
												>
													{register.status
														? "Approved"
														: "Pending"}
												</span>
											</td>
											<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<button
													onClick={() =>
														unSubsceibeHandler(
															register._id
														)
													}
													type="button"
													class="text-red-600 bg-red-100 rounded-xl px-2 font-semibold"
												>
													Unsubscribe
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

export default Dashboard;
