import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";
export default function Footer() {
	return (
		<div className={styles.footer}>
			<div>
				{" "}
				<p>#88 Emerald Park East, Six Roads, St. Philip, Barbados</p>
			</div>
			<div>
				<p>office: +1 246 271-1419</p>
				<p>
					cell/WhatsApp:
					<span style={{ whiteSpace: "nowrap" }}>+1 246 243-1946</span>{" "}
					<span style={{ whiteSpace: "nowrap" }}>+1 246 232-1419</span>
				</p>
			</div>
			<Link
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.facebook.com/profile.php?id=100066520098488"
			>
				<img
					style={{ width: "20px" }}
					src="/images/facebook.svg"
					alt="Facebook"
				/>
			</Link>
		</div>
	);
}
