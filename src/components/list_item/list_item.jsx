import React, { useState } from "react";
import styles from "./list_item.module.css";

const ListItem = ({ toDoItem }) => {
	const [completeStatus, setCompleteStatus] = useState(false);

	return (
		<li className={styles.item}>
			<div
				className={`${styles.status} ${completeStatus && styles.done}`}
			></div>
			<span>{toDoItem}</span>
		</li>
	);
};

export default ListItem;
