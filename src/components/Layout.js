import Header from "./Header/Header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="">
				<div className="">{children}</div>
			</main>
		</>
	);
};

export default Layout;
