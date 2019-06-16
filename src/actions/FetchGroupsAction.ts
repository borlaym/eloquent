import { Dispatch } from "redux";
import { Group } from "../types";

export const FETCH_GROUPS = 'FETCH_GROUPS';

export interface FetchGroupsAction {
	type: typeof FETCH_GROUPS,
	payload: Group[]
}

export default function fetchGroups() {
	return (dispatch: Dispatch) => {
		fetch('/groups')
			.then(response => response.json())
			.then(response => dispatch({
				type: 'FETCH_GROUPS',
				payload: response
			}))
	};
}