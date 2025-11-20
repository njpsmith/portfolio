const Contact = () => {
	return (
		<section
			id="contact"
			className="contact mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-labelledby="contact-heading"
		>
			<div className="container">
				<h2 id="contact-heading">Contact</h2>

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
