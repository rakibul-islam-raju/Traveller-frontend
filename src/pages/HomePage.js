import CoverImage from "../assets/images/hero-cover.jpg";
import Cover from "../assets/images/cover.jpg";
import Trecking from "../assets/images/trecking.jpg";
import Team from "../assets/images/team.jpg";
import { Link } from "react-router-dom";

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

			<section className="container mx-auto mt-16">
				<h4 className="text-3xl uppercase border-l-4 pl-2 border-teal-600 inline-block">
					Current Events
				</h4>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
					<div className="group">
						<img className="w-full" src={Trecking} alt="" />
						<div className="text-center mx-4 p-4 shadow bg-white group-hover:bg-teal-500 transform -mt-24 transition duration-300">
							<div className="">
								<h5 className="text-xl my-2 text-black uppercase group-hover:text-white transition duration-300 ease-liner">
									Trekking to hills
								</h5>
								<p className="group-hover:text-gray-100 transition duration-300 ease-liner mb-2">
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Enim maiores dolor rem
									expedita ad! Ex neque sit molestiae cumque
									architecto quam exercitationem et.
								</p>
							</div>
							<Link
								to=""
								className="text-teal-500 border-b-2 border-teal-500 group-hover:border-white group-hover:text-white text-white uppercase tracking-wide transition duration-300 ease-liner"
							>
								Subscribe
							</Link>
						</div>
					</div>
				</div>
			</section>

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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Laboriosam nesciunt libero
								deleniti pariatur....
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomePage;
