import * as React from 'react';
import { Link, match } from 'react-router-dom';
import { State, Group } from '../types';
import { connect } from 'react-redux';

interface Props {
	match: match<{ id: string }>,
	group?: Group
};

function MatchListScreen({ group }: Props) {
	if (!group) {
		return (<h1>Group not found</h1>);
	}
	return (
		<div>
			<h1>{group.name}</h1>
			<ul>
				{group.matches.map(match => (
					<li key={match.id}>
						{match.players[0]}{match.winner === 0 && '(w)'} {match.score && match.score[0]} -
						{match.score && match.score[1]} {match.players[1]}{match.winner === 1 && '(w)'} 
						<Link to={`/group/${group.id}/matches/${match.id}`}>Details</Link>
					</li>
				))}
			</ul>

		</div>
	);
}

function mapStateToProps(state: State, ownProps: Props): Props {
	return {
		match: ownProps.match,
		group: state.groups.find(group => group.id === ownProps.match.params.id)
	}
}

export default connect(mapStateToProps)(MatchListScreen);