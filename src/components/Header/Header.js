import React from 'react';
import './header.scss';

const Header = () => (
	<header>
		<div>
			<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Weather Wise Logo" />
		</div>
		<div>
			<h1>Weather Wise</h1>
			<h2>Stay Smart. Stay Weather.</h2>
		</div>
	</header>
);

export default Header;
