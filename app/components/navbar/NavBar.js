"use client";
import React from "react";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";
import Link from "next/link";
function NavBar() {
	const { asPath, pathname } = useRouter();

	return (
		<div className={styles.navbar}>
			<div>
				<p>
					<Link
						style={{
							color: "green",
							fontWeight: "bold",
							letterSpacing: "1px",
						}}
						className="my-link"
						href="/"
					>
						Faith Nursing Services
					</Link>
				</p>
			</div>
			<div className={styles.nav}>
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
		</div>
	);
}

export default NavBar;
