import React from "react";
import NavBar from "../components/navbar/NavBar";
import styles from "./contactus.module.css";
import Title from "../components/Title/Title";
import Landing from "../components/landing/Landing";
import ContactForm from "../components/form/ContactForm";
export default function contactus() {
	return (
		<div>
			<NavBar />
			<Landing image={"url(/images/contact.jpg)"} info={"Contact Us"} />
			<Title title={"Contact Us"} />
			<div className={styles.contactus}>
				<div>
					{/* <h3>Work with us</h3> */}
					<p>
						If you have any questions or comments, please contact us
						via phone, email, or WhatsApp.
					</p>
					<p>
						Tell us about your needs and we'll show you how we can
						help.
					</p>
				</div>
				<div className={styles.contactinfo}>
					<div>
						<h3>Email</h3>
						<p>faithnursingservices1@gmail.com</p>
						<p>winnlove1@hotmail.com</p>
					</div>
					<div>
						<h3>Phone</h3>
						<p>Office: +1 (246) 271-1419</p>
						<p>
							Cell/WhatsApp: +1 (246) 241-1946 +1 (246) 232-1419
						</p>
					</div>
				</div>
			</div>
			{false && <ContactForm />}
		</div>
	);
}
