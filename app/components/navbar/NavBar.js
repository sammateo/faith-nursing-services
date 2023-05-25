"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import Link from "next/link";
function NavBar() {
	const pathname = usePathname();
	const [windowSize, setWindowSize] = useState([]);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize([window.innerWidth, window.innerHeight]);
			if (window.innerWidth > 425) {
				openMenu();
			}
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	});
	let openMenu = () => {
		document.querySelector(".navitems").style.transform = "translateX(0vw)";
	};
	let closeMenu = () => {
		document.querySelector(".navitems").style.transform = "translateX(-100vw)";
	};
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
				<img
					className={styles.menuburger}
					onClick={openMenu}
					width="20"
					src="/images/menu.svg"
					alt="menu"
				/>
			</div>
			<div className={styles.nav + " navitems"}>
				<img
					className={styles.menuclose}
					onClick={closeMenu}
					width="20"
					src="/images/close.svg"
					alt="close"
				/>

				{pathname === "/" ? (
					<p style={{ borderBottom: "2px solid green" }}>
						<Link className="my-link" href="/">
							Home
						</Link>
					</p>
				) : (
					<p>
						<Link className="my-link" href="/">
							Home
						</Link>
					</p>
				)}

				{pathname.includes("aboutus") ? (
					<p style={{ borderBottom: "2px solid green" }}>
						<Link className="my-link" href="/aboutus">
							About Us
						</Link>
					</p>
				) : (
					<Link className="my-link" href="/aboutus">
						About Us
					</Link>
				)}

				{pathname.includes("contactus") ? (
					<p style={{ borderBottom: "2px solid green" }}>
						<Link className="my-link" href="/contactus">
							Contact Us
						</Link>
					</p>
				) : (
					<p>
						<Link className="my-link" href="/contactus">
							Contact Us
						</Link>
					</p>
				)}
			</div>
		</div>
	);
}

export default NavBar;
