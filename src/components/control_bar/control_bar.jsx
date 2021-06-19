import React from "react";
import styles from "./control_bar.module.css";

const ControlBar = ({ toDo, handleAllDelete, handleAllDone }) => {
	const onAllDone = (event) => {
		handleAllDone(event.target.innerText);
	};

	return (
		<div className={styles.controlBar}>
			<span>All</span>
			<div className={styles.buttons}>
				<button className={styles.button} onClick={onAllDone}>
					Done
				</button>
				<button className={styles.button} onClick={onAllDone}>
					Undone
				</button>
				<button className={styles.button} onClick={handleAllDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ControlBar;
