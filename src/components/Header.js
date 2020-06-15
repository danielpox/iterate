import React from 'react';
import PropTypes from 'prop-types';
import '../css/Header.css';

const Header = props => {
	return (
		<header>
			<h1 tabIndex="-1">{`${props.appMeta.name}`} – <small>{`${props.appMeta.version}`}</small></h1>
			<button type="button" className="add-item" onClick={() => {props.addItem("Item")}}>Add item</button>
		</header>
	);
};

Header.propTypes = {
	addItem: PropTypes.func.isRequired,
	appMeta: PropTypes.shape({
		name: PropTypes.string,
		version: PropTypes.string,
		author: PropTypes.string,
		company: PropTypes.string,
		releaseDate: PropTypes.string
	})
};

export default Header;
