import CoverImage from "../assets/images/cover.jpg";

const HomePage = () => {
	return (
		<>
			<section
				className="w-full h-screen bg-no-repeat bg-cover bg-center relative"
				style={{ backgroundImage: `url(${CoverImage})` }}
			>
				<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
					<div className="container mx-auto pt-48">
						<h2 className="text-6xl tracking-widest text-center leading-normal text-gray-100 uppercase">
							Visit world's most exciting place with{" "}
							<span className="bg-white bg-opacity-70 text-cyan-600 p-1">
								Traveller
							</span>
						</h2>
						<div className="flex justify-center mt-12">
							<button className="btn-primary text-xl font-semibold px-6 py-4 uppercase tanstition duration-300 ease-linear">
								Explore More
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomePage;
