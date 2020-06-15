import { combineReducers } from 'redux';
import ApplicationReducer from './Application';
import ItemReducer from './Item';

export default function Index(state = {}, action) {
	return {
		appMeta: ApplicationReducer,
		items: ItemReducer
	};
}