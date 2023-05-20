import React from "react";
import styles from "./title.module.css";
function Title({ title }) {
	return (
		<div>
			<h2 className={styles.title}>{title}</h2>
		</div>
	);
}

export default Title;
