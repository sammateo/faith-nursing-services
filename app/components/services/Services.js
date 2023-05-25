import React from "react";
import Title from "../Title/Title";
import styles from "./services.module.css";
export default function Services() {
	let serviceList = [
		{
			name: "Eldercare",
			list: [
				"Assistance with all levels of personal care such as bathing, dressing, grooming, skin care, and oral care",
				"Toileting and incontinence",
				"Medication reminders",
				"Transferring in & out of bed and repositioning",
				"Assistance with the activities of daily living such as grocery shopping, events, visiting family & friends, and errands",
				"Assistance with meal preparation and light housekeeping",
				"Ongoing wellness monitoring",
				"Companionship and community engagement",
			],
		},
		{
			name: "Baby & Childcare",
			list: [
				"Care from 0-2 years",
				"Daily care including feeding, changing, nap time, & supervised play",
				"Support with multiples (twins, triplets, etc.)",
				"Sick and well baby care",
				"Meal preparation",
			],
		},
	];
	return (
		<div>
			<Title title={"Services We Offer"} />
			<div className={styles.servicesContainer}>
				{serviceList.map((service) => (
					<div key={service.name} className={styles.service}>
						<h3>{service.name}</h3>
						<ul>
							{service.list.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
