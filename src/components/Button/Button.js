import React from 'react';
import './button.scss';

const Button = ({ type, href, children }) => (
		type === 'anchor' ? <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
	: type === "button" ? <button type="submit">{children}</button>
	: null
);

export default Button;
