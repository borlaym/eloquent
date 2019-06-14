import * as React from 'react';
import { Link } from 'react-router-dom';
import { State, Group } from '../types';
import { connect } from 'react-redux';

interface Props {
	groups: Group[]
};

function SelectGroupScreen(props: Props) {
	return (
		<ul>
			{props.groups.map(group => (
				<li key={group.id}>
					<Link to={`/group/${group.id}`}>{group.name}</Link>
				</li>
			))}
		</ul>
	);
}

function mapStateToProps(state: State): Props {
	return {
		groups: state.groups
	}
}

export default connect(mapStateToProps)(SelectGroupScreen);