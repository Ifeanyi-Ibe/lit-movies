const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<main className="flex justify-around bg-cyan-100 text-black mt-8 w-screen py-6">
				<section className="text-sm">About Us</section>
				<section className="text-sm">Contact</section>
				<section className="text-sm">
					&copy; {year} Lit Movies. All rights reserved
				</section>
			</main>
		</>
	);
};

export default Footer;
