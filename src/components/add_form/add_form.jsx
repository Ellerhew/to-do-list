import React, { useRef } from "react";
import styles from "./add_form.module.css";

const AddForm = ({ handleAdd }) => {
	const inputRef = useRef();
	const formRef = useRef();

	const onAdd = (event) => {
		event.preventDefault();
		if (!inputRef.current.value) {
			return;
		}
		const newToDo = {
			id: Date.now(),
			name: inputRef.current.value,
		};
		handleAdd(newToDo);
		inputRef.current.value = "";
	};

	return (
		<form ref={formRef} className={styles.addForm}>
			<button className={styles.button} onClick={onAdd}>
				<i className={`fas fa-plus`}></i>
			</button>
			<input
				ref={inputRef}
				className={styles.input}
				type="text"
				placeholder="I'm going to ..."
			></input>
		</form>
	);
};

export default AddForm;
