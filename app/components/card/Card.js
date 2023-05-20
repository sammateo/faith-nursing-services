import React from "react";
import styles from "./card.module.css";
import Image from "next/image";

function Card({ info, image, size }) {
	return (
		<div>
			{image ? (
				<div className={styles.card} style={{ backgroundImage: image }}>
					<p style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "white" }}>
						{info}
					</p>
				</div>
			) : (
				<div className={styles.card} style={{ width: size, maxWidth: "600px" }}>
					<p>{info}</p>
				</div>
			)}
		</div>
	);
}

export default Card;
