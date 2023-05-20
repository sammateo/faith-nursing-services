import React from "react";
import styles from "./landing.module.css";
import Image from "next/image";

function Landing({ info, image, size }) {
	return (
		<div>
			{image ? (
				<div className={styles.landing} style={{ backgroundImage: image }}>
					<p style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "white" }}>
						{info}
					</p>
				</div>
			) : (
				<div className={styles.landing} style={{ width: size }}>
					<p>{info}</p>
				</div>
			)}
		</div>
	);
}

export default Landing;
