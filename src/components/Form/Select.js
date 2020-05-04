import React from 'react';
import './form.scss';

const Select = ({ handleChange }) => (
	<select onChange={(e) => handleChange(e.target.value)}>
		<option value="metric">°C</option>
		<option value="imperial">°F</option>
	</select>
);

export default Select;