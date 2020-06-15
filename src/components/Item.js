import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import '../css/Item.css';

export default class Item extends Component {
	constructor(props) {
		super(props);
		this.onFocus = this.onFocus.bind(this);
		this.blur = this.blur.bind(this);
	}
	static propTypes = {
		index: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		count: PropTypes.number.isRequired,
		identifier: PropTypes.string,
		renameItem: PropTypes.func.isRequired,
		updateItemCount: PropTypes.func.isRequired,
		removeItem: PropTypes.func.isRequired
	};

	focus() {
		this.textInput.focus();
		this.selectName(this.textInput);
	}

	onFocus() {
		this.selectName(this.textInput);
	}

	blur() {
		this.textInput.blur();
		this.deselectName();
	}

	selectName(el) {
		let range = document.createRange();
		range.selectNodeContents(el);
		let sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}

	deselectName() {
		let sel = window.getSelection();
		sel.removeAllRanges();
	}

	render() {
		return(
			<div className="list-item" data-index={this.props.index} data-id={this.props.identifier}>
				<div className="list-item-meta">
					<button type="button" className="list-item-remove" title="Remove item" onClick={() => {this.props.removeItem(this.props.index)}}>&times;</button>
					<p
						className="list-item-name"
						contentEditable
						ref={(input) => { this.textInput = input; }}
						onKeyDown={e => {if (e.which === 13) {e.preventDefault(); this.blur()}}}
						onFocus={this.onFocus}
						onBlur={
						(e) => {
							let target = e.target;

							if (target.innerText !== this.props.name)
								this.props.renameItem(e.target.innerText, this.props.index)

							this.deselectName();
						}
					}>{this.props.name}</p>
				</div>
				<Counter
					index={this.props.index}
					updateItemCount={this.props.updateItemCount}
					count={this.props.count}
				/>
			</div>
		);
	};
}