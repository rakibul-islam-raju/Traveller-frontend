import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className="" style={{ minHeight: "70vh" }}>
				<div className="">{children}</div>
			</main>
			<Footer />
		</>
	);
};

export default Layout;
