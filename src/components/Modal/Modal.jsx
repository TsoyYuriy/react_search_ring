import React from 'react';
import Button from '../UI/Button/Button';
import './Modal.css';

const Modal = (props) => {
	return ( 
		<div className={props.modalClass}>
			<div className="modal">
			<p className='modal__text'>{props.text}</p>

			<Button 
				click={props.click}
				text={'START'}
			/>
			</div>
		</div>
	);
}
 
export default Modal;