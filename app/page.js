import styles from "./page.module.css";
import NavBar from "./components/navbar/NavBar";
import Landing from "./components/landing/Landing";
import Services from "./components/services/Services";

export default function Home() {
	let serviceInfo = [
		{
			text: "We provide Babysitting and Pateint Care",
			img: "",
		},
		{
			text: "General Nursing Services for elderly and recovering patients",
			img: "",
		},
		{
			text: "We take care of you in the comfort of your own home",
			img: "",
		},
		{
			text: "We offer light cleaning, laundry and cooking",
			img: "",
		},
	];
	return (
		<main className={styles.main}>
			<NavBar />
			<Landing
				image={"url(/images/black-nurse-1.avif)"}
				info={"Faith Nursing Services"}
			/>
			<div>
				<p className={styles.description}>
					Faith Nursing Services provides general nursing services, babysitting
					and patient care, as well as care for elderly and any recovering
					patients
				</p>
			</div>
			<div></div>
			<Services />
		</main>
	);
}
