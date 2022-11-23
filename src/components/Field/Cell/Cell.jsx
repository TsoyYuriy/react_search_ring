import React from 'react';
import './Cell.css';

const Cell = (props) => {
	return ( 
		<div 
			className={props.className}
			onClick={props.click}
			id={props.id}
			/>
	);
}
 
export default Cell;