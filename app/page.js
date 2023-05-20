// "use-client";
//state management/hooks should be done client side
import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/card/Card";
import NavBar from "./components/navbar/NavBar";
import Landing from "./components/landing/Landing";
import Services from "./components/services/Services";

export default function Home() {
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
			<Services />
		</main>
	);
}
