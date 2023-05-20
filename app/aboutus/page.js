import React from "react";
import NavBar from "../components/navbar/NavBar";
import Card from "../components/card/Card";
import styles from "./aboutus.module.css";
import Title from "../components/Title/Title";
import Landing from "../components/landing/Landing";
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
			<Card info={aboutinfo} size={"90vw"} />
			<Card
				info={"We look forward to working with you and your family"}
				size={"90vw"}
			/>
		</div>
	);
}
