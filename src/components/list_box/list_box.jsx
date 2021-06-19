import React from "react";
import ListItem from "../list_item/list_item";
import styles from "./list_box.module.css";

const ListBox = ({ toDo, handleDelete, handleDone }) => {
	return (
		<ul className={styles.listBox}>
			{toDo.map((item) => (
				<ListItem
					key={item.id}
					toDoItem={item}
					handleDelete={handleDelete}
					handleDone={handleDone}
				/>
			))}
		</ul>
	);
};

export default ListBox;
