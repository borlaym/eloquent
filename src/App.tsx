import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import SelectGroupScreen from './screens/SelectGroupScreen';
import GameListScreen from './screens/GameListScreen';
import GameDetailsScreen from './screens/GameDetailsScreen';
import AddGameScreen from './screens/AddGameScreen';

export default function App() {
	return (
		<Router>
			<Route path="/" exact component={SelectGroupScreen} />
			<Route path="/group/:groupId" exact component={GameListScreen} />
			<Route path="/group/:groupId/games/:gameId" exact component={GameDetailsScreen} />		
			<Route path="/group/:groupId/add" exact component={AddGameScreen} />		
		</Router>
	)
}