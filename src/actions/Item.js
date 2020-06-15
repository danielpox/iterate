import * as ItemActionTypes from '../actiontypes/Item';

export const addItem = name => {
	return {
		type: ItemActionTypes.ADD_ITEM,
		name
	};
};

export const removeItem = index => {
	return {
		type: ItemActionTypes.REMOVE_ITEM,
		index
	};
};

export const renameItem = (name, index) => {
	return {
		type: ItemActionTypes.RENAME_ITEM,
		name,
		index
	};
};

export const updateItemCount = (index, value) => {
	return {
		type: ItemActionTypes.UPDATE_ITEM_COUNT,
		index,
		value
	};
};