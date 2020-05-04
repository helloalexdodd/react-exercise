import React from 'react';
import Button from '../Button';
import './form.scss';

const Form = ({ handleSubmit, handleChange, value }) => (
	<form onSubmit={(e) => handleSubmit(e)}>
		<input type="text" value={value} onChange={(e) => handleChange(e.target.value)} />
		<Button
			value="Submit"
			type="input"
		/>
	</form>
);

export default Form;
