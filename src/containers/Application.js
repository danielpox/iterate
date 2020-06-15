import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemActionCreators from '../actions/Item';
import Header from '../components/Header';
import List from '../components/List';
import '../css/Application.css';

class Application extends Component {
	static propTypes = {
		items: PropTypes.array,
		appMeta: PropTypes.shape({
			name: PropTypes.string,
			version: PropTypes.string,
			author: PropTypes.string,
			company: PropTypes.string,
			releaseDate: PropTypes.string
		})
	};

	render() {
		const { dispatch, items, appMeta } = this.props;
		const addItem = bindActionCreators(ItemActionCreators.addItem, dispatch);
		const removeItem = bindActionCreators(ItemActionCreators.removeItem, dispatch);
		const renameItem = bindActionCreators(ItemActionCreators.renameItem, dispatch);
		const updateItemCount = bindActionCreators(ItemActionCreators.updateItemCount, dispatch);

		return (
			<div className="application">
				<Header addItem={addItem} appMeta={appMeta} />
				<List items={items} removeItem={removeItem} renameItem={renameItem} updateItemCount={updateItemCount} />
			</div>
		);
	};
}

const mapStateToProps = state => {
	return {
		items: state.items,
		appMeta: state.appMeta
	};
};

export default connect(mapStateToProps)(Application);