import React, { useState } from "react";
import styles from "./list_item.module.css";

const ListItem = (props) => {
	const [completeStatus, setCompleteStatus] = useState(false);

	return (
		<li className={styles.item}>
			<div
				className={`${styles.status} ${completeStatus && styles.done}`}
			></div>
			<span>물 마시기</span>
		</li>
	);
};

export default ListItem;
