import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
	const [dropdown, setDropdown] = useState(false);

	const { currentUser, logout } = useAuth();

	return (
		<header className="py-4 shadow fixed w-full top-0 left-0 bg-white z-10">
			<div className="wrapper flex justify-between items-center">
				<Link to="/" className="brand text-4xl">
					Traveller
				</Link>
				<div className="menus">
					<nav>
						<ul className="flex flex-wrap items-center">
							<li>
								{!currentUser ? (
									<Link
										className="btn btn-primary"
										to="/login"
									>
										Login
									</Link>
								) : (
									<button
										type="button"
										className="font-semibold relative"
										onClick={() => setDropdown(!dropdown)}
									>
										{currentUser.displayName}{" "}
										<i className="fa fa-angle-down"></i>
										{dropdown && (
											<div className="absolute flex flex-col bg-gray-200 top-12 rounded-b shadow-lg w-32">
												<Link
													className="text-gray-700 font-normal hover:bg-gray-300 p-2 rounded-b text-left"
													to="/my-events"
												>
													My Events
												</Link>
												<Link
													className="text-gray-700 font-normal hover:bg-gray-300 p-2 rounded-b text-left"
													to="/admin/dashboard"
												>
													Admin
												</Link>
												<button
													type="button"
													onClick={logout}
													className="text-gray-700 font-normal hover:bg-gray-300 p-2 rounded text-left"
												>
													Logout
												</button>
											</div>
										)}
									</button>
								)}
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
