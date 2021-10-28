import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="py-4 shadow fixed w-full top-0 left-0 bg-white z-10">
			<div className="container mx-auto flex justify-between items-center">
				<div className="brand text-4xl">Traveller</div>
				<div className="menus">
					<nav>
						<ul className="flex flex-wrap items-center">
							<li>
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/">
									About Us
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/">
									Blog
								</Link>
							</li>
							<li>
								<Link className="btn btn-primary" to="/">
									Login
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
