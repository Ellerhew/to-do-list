import React from "react";
import styles from "./list_item.module.css";

const ListItem = ({ toDoItem, handleDelete, handleDone }) => {
	const onDelete = () => {
		handleDelete(toDoItem);
	};

	const onDone = () => {
		handleDone(toDoItem);
	};

	return (
		<li className={styles.item}>
			<div className={styles.content} onClick={onDone}>
				<div
					className={`${styles.status} ${
						toDoItem.completeStatus && styles.done
					}`}
				></div>
				<span
					className={`${styles.name} ${
						toDoItem.completeStatus && styles.doneName
					}`}
				>
					{toDoItem.name}
				</span>
			</div>
			<button className={styles.button} onClick={onDelete}>
				<i className="far fa-trash-alt"></i>
			</button>
		</li>
	);
};

export default ListItem;
