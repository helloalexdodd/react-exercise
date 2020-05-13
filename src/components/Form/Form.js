import React from 'react';
import Button from '../Button';
import Select from './Select';
import './form.scss';

const Form = ({
	handleSubmit,
	handleChange,
	handleFocus,
	value
}) => (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div>
				<input
					type="text"
					value={value}
					onChange={(e) => handleChange(e.target.value)}
					onFocus={(e) => { handleFocus() }}
				/>
				<Select handleChange={handleChange} />
			</div>
			<Button type="button">Submit</Button>
		</form>
	);

export default Form;
