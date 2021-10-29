const Registration = () => {
	return (
		<section className="mt-32 wrapper">
			<div className="flex justify-center">
				<div className="w-full md:w-6/12 shadow-lg p-8 ">
					<h4 className="text-4xl border-l-4 border-teal-500 pl-2 uppercase">
						Registration
					</h4>
					<form className="mt-8">
						<label htmlFor="fullName">Full Name</label>
						<input
							className="form-control"
							placeholder="Full Name"
							type="text"
							name="fullName"
						/>
						<label htmlFor="username">Username</label>
						<input
							className="form-control"
							placeholder="Username"
							type="text"
							name="username"
						/>
						<label htmlFor="email">Email</label>
						<input
							className="form-control"
							placeholder="Email"
							type="email"
							name="email"
						/>
						<label htmlFor="event">Select Event</label>
						<select className="form-control" name="event">
							<option value="">AAAA</option>
						</select>
					</form>
					<button className="btn btn-primary w-full" type="button">
						Register
					</button>
				</div>
			</div>
		</section>
	);
};

export default Registration;
