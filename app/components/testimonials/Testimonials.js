import React from "react";
import Title from "../Title/Title";
import styles from "./testimonials.module.css";
function Testimonials() {
	let testimonials = [
		{
			id: 1,
			text: "After my sister's stroke, we needed lots of help with her post care. We would have been lost without Shonelle.",
			name: "Beverley L.",
		},
		{
			id: 2,
			text: "Shonelle was a godsend—there's really no other way to describe. I could finally get work done knowing that my mother was extremely well taken care of. She was also so pleasant and kind.",
			name: "Janelle A.",
		},
		{
			id: 3,
			text: "It is such a relief when you find a quality caregiver. You don't realise how much you're managing until you get help. With Daphne there providing excellent personal care and keeping her company, I knew my sister was sorted.",
			name: "Elizabeth L.",
		},
	];
	return (
		<div className={styles.container}>
			<Title title={"Testimonials"} />
			<div className={styles.testimonialscontainer}>
				{testimonials.map((test) => (
					<div key={test.id} className={styles.testimonial}>
						<p>"{test.text}"</p>
						<p className={styles.name}>~ {test.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Testimonials;
