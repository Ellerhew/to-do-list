import React from "react";
import styles from "./app.module.css";
import AddForm from "./components/add_form/add_form";
import ControlBar from "./components/control_bar/control_bar";
import ListBox from "./components/list_box/list_box";

function App() {
	return (
		<div className={styles.app}>
			<section className={styles.container}>
				<h1 className={styles.title}>T O D O</h1>
				<AddForm />
				<div className={styles.listAndBar}>
					<ListBox />
					<ControlBar />
				</div>
			</section>
		</div>
	);
}

export default App;
