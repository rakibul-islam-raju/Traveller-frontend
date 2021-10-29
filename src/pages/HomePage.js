import CoverImage from "../assets/images/hero-cover.jpg";

import Team from "../assets/images/team.jpg";
import { Link } from "react-router-dom";
import Events from "../components/Home/Events";
import Posts from "../components/Home/Posts";

const HomePage = () => {
	return (
		<>
			<section
				className="w-full h-screen bg-no-repeat bg-cover bg-center relative"
				style={{ backgroundImage: `url(${CoverImage})` }}
			>
				<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30">
					<div className="container mx-auto pt-48">
						<h2 className="text-6xl tracking-widest text-center leading-normal text-gray-100 uppercase">
							Visit world's most exciting place with{" "}
							<span className="text-teal-600 p-1">Traveller</span>
						</h2>
						<div className="flex justify-center mt-12">
							<button className="btn-primary text-xl font-semibold px-6 py-4 uppercase tanstition duration-300 ease-linear">
								Explore More
							</button>
						</div>
					</div>
				</div>
			</section>

			<Events />

			<section className="container mx-auto mt-16 flex flex-wrap">
				<div className="w-3/12 shadow bg-white p-4">
					<h4 className="text-xl mb-4 uppercase border-l-4 pl-2 border-teal-600 inline-block">
						About Us
					</h4>
					<img className="w-full border" src={Team} alt="" />
					<p className="text-center mt-4">
						Denote simple fat denied add worthy little use. As some
						he high down am week. Conduct esteems cottage pasture
						winding. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Ut, vero!
					</p>
					<div className="flex justify-center space-x-6 mt-4 text-xl mb-12">
						<Link className="hover:text-teal-500" to="">
							<i className="fab fa-facebook"></i>
						</Link>
						<Link className="hover:text-teal-500" to="">
							<i className="fab fa-instagram"></i>
						</Link>
						<Link className="hover:text-teal-500" to="">
							<i className="fab fa-twitter"></i>
						</Link>
						<Link className="hover:text-teal-500" to="">
							<i className="fab fa-youtube"></i>
						</Link>
					</div>
					<div className="bg-gray-800 p-4">
						<h4 className="text-xl text-white mb-4 uppercase border-l-4 pl-2 border-teal-600 inline-block">
							Join our newsletter
						</h4>
						<input
							className="w-full p-2"
							type="email"
							placeholder="Email"
						/>
						<button className="p-2 btn-primary w-full mt-2">
							SUBMIT
						</button>
					</div>
				</div>
				<div className="w-9/12 pl-6 ">
					<Posts />
				</div>
			</section>
		</>
	);
};

export default HomePage;
