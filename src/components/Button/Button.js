import React from 'react';
import './button.scss';

const Button = ({ value, type, href }) => (
	type === 'input'
		? <input type="submit" value={value} />
		: type === 'anchor'
			? <a href={href}>{value}</a>
			: type === "button"
				? <button>{value}</button>
				: null
);

export default Button;
