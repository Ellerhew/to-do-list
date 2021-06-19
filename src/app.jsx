import React, { useState } from "react";
import styles from "./app.module.css";
import AddForm from "./components/add_form/add_form";
import ControlBar from "./components/control_bar/control_bar";
import ListBox from "./components/list_box/list_box";

function App() {
	const [toDo, setToDo] = useState([
		{ id: 1, name: "물 마시기" },
		{
			id: 2,
			name: "책 읽기",
		},
		{
			id: 3,
			name: "청소하기",
		},
	]);

	const handleAdd = (newToDo) => {
		const updated = [...toDo];
		updated.unshift(newToDo);
		setToDo(updated);
	};

	return (
		<div className={styles.app}>
			<section className={styles.container}>
				<h1 className={styles.title}>T O D O</h1>
				<AddForm handleAdd={handleAdd} />
				<div className={styles.listAndBar}>
					<ListBox toDo={toDo} />
					<ControlBar />
				</div>
			</section>
		</div>
	);
}

export default App;
