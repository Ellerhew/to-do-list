import React, { useState } from "react";
import styles from "./list_item.module.css";

const ListItem = ({ toDoItem, handleDelete }) => {
	const [completeStatus, setCompleteStatus] = useState(false);

	const onDelete = (event) => {
		event.preventDefault();
		handleDelete(toDoItem);
	};

	return (
		<li className={styles.item}>
			<div
				className={`${styles.status} ${completeStatus && styles.done}`}
			></div>
			<span className={styles.name}>{toDoItem.name}</span>
			<button className={styles.button} onClick={onDelete}>
				<i className="far fa-trash-alt"></i>
			</button>
		</li>
	);
};

export default ListItem;
