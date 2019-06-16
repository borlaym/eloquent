import * as React from 'react';
import { Link, match } from 'react-router-dom';
import { State, Group } from '../types';
import { connect } from 'react-redux';

interface Props {
	match: match<{ groupId: string }>,
	group?: Group
};

function GameListScreen({ group }: Props) {
	if (!group) {
		return (<h1>Group not found</h1>);
	}
	return (
		<div>
			<h1>{group.name}</h1>
			<ul>
				{group.games.map(game => (
					<li key={game.id}>
						{game.players[0]}{game.winner === 0 && '(w)'} {game.score && game.score[0]} -
						{game.score && game.score[1]} {game.players[1]}{game.winner === 1 && '(w)'} 
						<Link to={`/group/${group.id}/games/${game.id}`}>Details</Link>
					</li>
				))}
			</ul>

			<Link to={`/group/${group.id}/add`}>Add new game</Link>

		</div>
	);
}

function mapStateToProps(state: State, ownProps: Props): Props {
	return {
		match: ownProps.match,
		group: state.groups.find(group => group.id === parseInt(ownProps.match.params.groupId, 10))
	}
}

export default connect(mapStateToProps)(GameListScreen);