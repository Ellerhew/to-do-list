import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import AddForm from "./components/add_form/add_form";
import ControlBar from "./components/control_bar/control_bar";
import ListBox from "./components/list_box/list_box";

function App() {
	const loadToDos = () => {
		const toDos_ls = localStorage.getItem("TODOS");
		if (toDos_ls === null) {
			return;
		}
		const toDos = JSON.parse(toDos_ls);
		return toDos;
	};

	const [toDo, setToDo] = useState(
		loadToDos() || [
			{ id: 1, name: "Add your own To Do here!", completeStatus: false },
		]
	);

	const handleDone = (toDoItem) => {
		const updated = [...toDo];
		updated.forEach((item) => {
			if (item.id === toDoItem.id) {
				item.completeStatus = item.completeStatus ? false : true;
			}
		});
		setToDo(updated);
	};

	const handleAdd = (newToDo) => {
		const updated = [...toDo];
		updated.unshift(newToDo);
		setToDo(updated);
	};

	const handleDelete = (toDoItem) => {
		const updated = toDo.filter((item) => item.id !== toDoItem.id);
		setToDo(updated);
	};

	const handleAllDone = (status) => {
		const updated = [...toDo];
		switch (status) {
			case "Done":
				updated.forEach((item) => {
					item.completeStatus = true;
				});
				break;
			case "Undone":
				updated.forEach((item) => {
					item.completeStatus = false;
				});
				break;
			default:
				throw new Error("unknown status");
		}
		setToDo(updated);
	};

	const handleAllDelete = () => {
		setToDo([]);
	};

	useEffect(() => {
		localStorage.setItem("TODOS", JSON.stringify(toDo));
	}, [toDo]);

	return (
		<div className={styles.app}>
			<section className={styles.container}>
				<header className={styles.header}>
					<h1 className={styles.title}>T O D O</h1>
					<i className={`far fa-edit ${styles.edit}`}></i>
				</header>

				<AddForm handleAdd={handleAdd} />
				<div className={styles.listAndBar}>
					<ListBox
						toDo={toDo}
						handleDelete={handleDelete}
						handleDone={handleDone}
					/>
					<ControlBar
						toDo={toDo}
						handleAllDelete={handleAllDelete}
						handleAllDone={handleAllDone}
					/>
				</div>
			</section>
		</div>
	);
}

export default App;
