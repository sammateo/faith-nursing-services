import React from "react";
import NavBar from "../components/navbar/NavBar";
import Card from "../components/card/Card";
import styles from "./aboutus.module.css";
import Title from "../components/Title/Title";
import Landing from "../components/landing/Landing";
import Testimonials from "../components/testimonials/Testimonials";
export default function page() {
	let aboutinfo = `Winnie Morris established Faith Nursing Service in 2009. A midwife and
				certified nurse for approximately 20 years at Bayview Hospital, Winnie
				seeks out highly-trained and highly-experienced staff to support your
				caregiving needs. As a nurse for over 35 years, Winnie is driven by a
				great passion for caring for the elderly. It is this same passion that
				drives all the caregivers at Faith Nursing Services.`;
	return (
		<div>
			<NavBar />
			<Landing image={"url(/images/steth.jpg)"} info={"About Us"} />

			<Title title={"About Us"} />
			{/* <div className={styles.aboutParagraph}>
				<div className={styles.aboutCard}>
					<p>Winnie Morris established Faith Nursing Service in 2009.</p>
				</div>
				<div className={styles.aboutCard}>
					<p>
						A midwife and certified nurse for approximately 20 years at Bayview
						Hospital, Winnie seeks out highly-trained and highly-experienced
						staff to support your caregiving needs.
					</p>
				</div>
				<div className={styles.aboutCard}>
					<p>
						As a nurse for over 35 years, Winnie is driven by a great passion
						for caring for the elderly.
					</p>
				</div>
				<div className={styles.aboutCard}>
					<p>
						It is this same passion that drives all the caregivers at Faith
						Nursing Services.
					</p>
				</div>
			</div> */}

			<Card info={aboutinfo} size={"90vw"} />
			<Card
				info={"We look forward to working with you and your family"}
				size={"90vw"}
			/>
			<Testimonials />
		</div>
	);
}
