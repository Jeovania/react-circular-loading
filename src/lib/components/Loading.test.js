import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';

it('Renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Loading />, div);
});