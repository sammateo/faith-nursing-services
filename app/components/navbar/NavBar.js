"use-client";
import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
function NavBar() {
	return (
		<div className={styles.navbar}>
			<p>
				<Link className="my-link" href="/">
					Home
				</Link>
			</p>
			<p>
				<Link className="my-link" href="/aboutus">
					About Us
				</Link>
			</p>
			<p>
				<Link className="my-link" href="/contactus">
					Contact Us
				</Link>
			</p>
		</div>
	);
}

export default NavBar;
