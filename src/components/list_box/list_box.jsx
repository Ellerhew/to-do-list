import React from "react";
import ListItem from "../list_item/list_item";
import styles from "./list_box.module.css";

const ListBox = (props) => {
	return (
		<ul className={styles.listBox}>
			<ListItem />
		</ul>
	);
};

export default ListBox;
