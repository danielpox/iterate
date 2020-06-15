import * as ItemActionTypes from '../actiontypes/Item';
import MathUtil from '../helpers/MathUtil';

const initialState = JSON.parse(localStorage.getItem("Synse.Iterate.ItemList")) || {};

export default function Item(state = initialState, action) {
	let date = new Date();
	let day = date.getDay();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	switch (action.type) {
		case ItemActionTypes.ADD_ITEM: {
			const itemCount = state.items ? state.items.length + 1 : 1;

			const identifierArray = new Uint32Array(itemCount);
			if (window.crypto.getRandomValues) {
				window.crypto.getRandomValues(identifierArray);
			} else {
				identifierArray.map(index => {
					return identifierArray[index] = Math.floor(Math.random() * 9) + 9;
				});
			}

			const newItem = {
					index: itemCount,
					name: action.name,
					count: 0,
					identifier: identifierArray[itemCount - 1].toString(),
					created: `${year}-${month}-${day}`,
					updated: ""
				};

			const addItemList = state.items ? [...state.items, newItem] : [newItem];

			return {
				...state,
				items: addItemList
			};
		}
		case ItemActionTypes.REMOVE_ITEM: {
			const removeItemList = [
				...state.items.slice(0, action.index),
				...state.items.slice(action.index + 1)
			];

			return {
				...state,
				items: removeItemList
			};
		}
		case ItemActionTypes.RENAME_ITEM: {
			const renameItemList = state.items.map((item, index) => {
				if (index === action.index) {
					return {
						...item,
						name: action.name,
						updated: `${year}-${month}-${day}`
					};
				}

				return item;
			});

			return {
				...state,
				items: renameItemList
			};
		}
		case ItemActionTypes.UPDATE_ITEM_COUNT: {
			const updateItemList = state.items.map((item, index) => {
				if (index === action.index) {
					return {
						...item,
						count: MathUtil.ClampBottom(item.count + action.value, 0),
						updated: `${year}-${month}-${day}`
					};
				}

				return item;
			});

			return {
				...state,
				items: updateItemList
			};
		}
		default:
			return state;
	}
};