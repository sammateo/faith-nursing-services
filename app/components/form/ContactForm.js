"use client";
import React, { useRef } from "react";
import styles from "./contactform.module.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
	const form = useRef();
	const successfulSubmissionNotification = () =>
		toast.success("Submission Received.");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				form.current,
				{
					publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					console.log("SUCCESS!");
					successfulSubmissionNotification();
					//window.location.reload();
					e.target.reset();
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};
	return (
		<div className={styles.contactFormContainer}>
			<div className={styles.formHeader}>
				<p className={styles.formTitle}>Let's get started</p>
				<p className={styles.formSubtitle}>
					Talk with us today, and find out more.
				</p>
			</div>
			<ToastContainer />
			<form
				ref={form}
				onSubmit={sendEmail}
				className={styles.contactForm}
			>
				<input type="text" placeholder="Name" name="name" required />
				<input
					type="text"
					placeholder="Phone Number"
					name="phone"
					required
				/>
				<input
					type="email"
					placeholder="Email Address"
					name="email"
					required
				/>
				<input
					type="text"
					placeholder="Relationship To Client"
					name="client_relationship"
				/>
				<textarea placeholder="Message" name="message" />
				<button type="submit" className={styles.submitButton}>
					Submit
				</button>
			</form>
		</div>
	);
}
