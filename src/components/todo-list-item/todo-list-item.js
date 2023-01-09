import React, { useContext } from 'react';
import TodoContext from "../todo-context";

const TodoListItem = ({
	label,
	important,
	done,
	selected,
	id
}) => {

	let classNames = "todo-list-item d-flex";
	const buttonClass = important ? 'btn-success' : 'btn-outline-success';

	const {
		isSelectAvailable,
		removeItem,
		onToggleImportant,
		onToggleDone,
		onToggleItemSelected
	} = useContext(TodoContext);

	if(important) classNames += ' important';
	if(done) classNames += ' done';

	return (
		<div className={ classNames }>
			{ isSelectAvailable
				? <input
				type="checkbox"
				checked={ selected }
				onChange={ () => onToggleItemSelected(id) } />
				: null
			}
			<span
				onClick={ () => onToggleDone(id) } >
				{ label }
			</span>
			<button
				className="btn btn-outline-danger btn-md"
				onClick={ () => removeItem(id) }>
				<i className="fa fa-trash-can"></i>
			</button>
			<button
				className={ `btn ${ buttonClass } btn-md` }
				onClick={ () => onToggleImportant(id) } >
				<i className="fa fa-exclamation"></i>
			</button>
		</div>
	)
}

export default TodoListItem;
