import * as React from 'react';
import { Link, match } from 'react-router-dom';
import { State, Group, Game } from '../types';
import { connect } from 'react-redux';

interface Props {
	match: match<{ groupId: string, gameId: string }>,
	group?: Group,
	game?: Game
};

function GameDetailsScreen({ group, game }: Props) {
	if (!group || !game) {
		return (<h1>Game not found</h1>);
	}
	return (
		<div>
			<h1>{group.name} - Game details</h1>
			<li key={game.id}>
				{game.players[0]}{game.winner === 0 && '(w)'} {game.score && game.score[0]} -
						{game.score && game.score[1]} {game.players[1]}{game.winner === 1 && '(w)'}
			</li>

		</div>
	);
}

function mapStateToProps(state: State, ownProps: Props): Props {
	const group = state.groups.find(group => group.id === ownProps.match.params.groupId);
	const game = group ? group.games.find(game => game.id === ownProps.match.params.gameId) : undefined;
	return {
		match: ownProps.match,
		group,
		game 
	};
}

export default connect(mapStateToProps)(GameDetailsScreen);