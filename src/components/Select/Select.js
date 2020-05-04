import React from 'react';
import './select.scss';

const Select = ({ handleChange }) => (
	<select onChange={(e) => handleChange(e.target.value)}>
		<option value="metric">°C</option>
		<option value="imperial">°F</option>
	</select>
);

export default Select;