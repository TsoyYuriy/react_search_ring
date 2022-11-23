import React from 'react';
import Cell from './Cell/Cell';
import './Field.css';

const Field = (props) => {
	return ( 
		<div className='field'>
			{props.cells.map((c )=> {
				return <Cell
								key={c.id}
								id={c.id}
								data={c.hasItem}
								click={(e) => props.click(e, c.id)}
								className={props.className}
								/>
			})}
		</div>
	);
}
 
export default Field;