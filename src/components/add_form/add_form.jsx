import React from "react";
import styles from "./add_form.module.css";

const AddForm = (props) => {
	return (
		<form className={styles.addForm}>
			<button className={styles.button}>
				<i className={`fas fa-plus`}></i>
			</button>
			<input
				className={styles.input}
				type="text"
				placeholder="I'm going to ..."
			></input>
		</form>
	);
};

export default AddForm;
