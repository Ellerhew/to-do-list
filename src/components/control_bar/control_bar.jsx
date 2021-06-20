import React, { memo } from "react";
import styles from "./control_bar.module.css";

const ControlBar = memo(({ handleAllDelete, handleAllDone }) => {
	const onAllDone = (event) => {
		handleAllDone(event.target.name);
	};

	return (
		<div className={styles.controlBar}>
			<div className={styles.buttons}>
				<button className={styles.button} name="done" onClick={onAllDone}>
					<div className={`${styles.status} ${styles.done}`} />
					Mark All
				</button>
				<button className={styles.button} name="undone" onClick={onAllDone}>
					<div className={`${styles.status} ${styles.undone}`} />
					Unmark All
				</button>
				<button className={styles.button} onClick={handleAllDelete}>
					<i className={`far fa-trash-alt ${styles.delete}`}></i>
					Delete All
				</button>
			</div>
		</div>
	);
});

export default ControlBar;
