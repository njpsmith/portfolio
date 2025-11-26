const Contact = () => {
	return (
		<section
			id="contact"
			className="contact mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-labelledby="contact-heading"
		>
			<div className="container">
				<h2
					id="contact-heading"
					className="text-xl font-bold mb-0 py-5 lg:pb-4 lg:pt-0 sticky top-0 z-20 lg:relative"
				>
					Contact
				</h2>

				<p>
					Whether you're looking to collaborate, need help with a project, or
					just want to say hello, drop me a message. I’ll get back to you as
					soon as I can.
				</p>

				<p>
					Email:{' '}
					<a href="mailto:smith.nicholasjp@gmail.com">
						smith.nicholasjp@gmail.com
					</a>
				</p>
				<p>
					Find me on{' '}
					<a
						href="https://www.linkedin.com/in/nicholas-smith-97a90829/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
					.
				</p>
				{/*<form
								className="contact-form"
								action="/api/contact"
								method="post"
								aria-describedby="contact-instructions"
							>
								<p id="contact-instructions">
									Prefer email?{' '}
									<a href="mailto:you@example.com">you@example.com</a>
								</p>

								<label for="name">Name</label>
								<input id="name" name="name" type="text" required />

								<label for="email">Email</label>
								<input id="email" name="email" type="email" required />

								<label for="message">Message</label>
								<textarea
									id="message"
									name="message"
									rows="6"
									required
								></textarea>

								<button type="submit">Send message</button>
							</form>*/}
			</div>
		</section>
	);
};

export default Contact;
