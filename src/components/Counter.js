import React from 'react';
import PropTypes from 'prop-types';
import '../css/Counter.css';

const Counter = props => {
	return (
		<div className="counter">
			<button type="button" className="counter-update increase" title="Decrease value" onClick={() => {props.updateItemCount(props.index, -1)}}>-</button>
			<div className="counter-value">{props.count}</div>
			<button type="button" className="counter-update decrease" title="Increase value" onClick={() => {props.updateItemCount(props.index, 1)}}>+</button>
		</div>
	);
};

Counter.propTypes = {
	index: PropTypes.number.isRequired,
	updateItemCount: PropTypes.func.isRequired,
	count: PropTypes.number.isRequired
};

export default Counter;