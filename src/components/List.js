import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import '../css/List.css';

export default class List extends Component {
	static propTypes = {
		items: PropTypes.arrayOf(PropTypes.shape({
			index: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			count: PropTypes.number.isRequired,
			identifier: PropTypes.string,
			created: PropTypes.string.isRequired,
			updated: PropTypes.string.isRequired,
		})),
		removeItem: PropTypes.func.isRequired,
		renameItem: PropTypes.func.isRequired,
		updateItemCount: PropTypes.func.isRequired
	};

	componentWillUpdate(nextProps, nextState) {
		// alert(`Is equal: ${nextProps.items === localStorage.getItem("Synse.Iterate.ItemList")}`);
		localStorage.setItem("Synse.Iterate.ItemList", JSON.stringify(nextProps.items));
	};

	render() {
		if (this.props.items.length > 0) {
			const itemCount = this.props.items.length;

			const identifierArray = new Uint32Array(itemCount);
			if (window.crypto.getRandomValues) {
				window.crypto.getRandomValues(identifierArray);
			} else {
				identifierArray.map(index => {
					return index = Math.floor(Math.random() * 9) + 9;
				});
			}

			const itemComponents = this.props.items.map((item, index) => {
				return {
					index: index,
					name: item.name,
					count: item.count,
					identifier: identifierArray[index].toString(),
					renameItem: this.props.renameItem,
					updateItemCount: this.props.updateItemCount,
					removeItem: this.props.removeItem
				};
			});

			return (
				<div className="list">
					{itemComponents.map((item, index) => {
						return <Item
							index={item.index}
							name={item.name}
							count={item.count}
							key={item.identifier}
							identifier={item.identifier}
							renameItem={item.renameItem}
							updateItemCount={item.updateItemCount}
							removeItem={item.removeItem}
						/>
					})}
				</div>
			);
		}

		return (
			<div className="message-box">
				<p className="message">No items.</p>
			</div>
		);
	};
}