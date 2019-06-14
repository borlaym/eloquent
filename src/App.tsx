import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SelectGroupScreen from './screens/SelectGroupScreen';
import MatchListScreen from './screens/MatchListScreen';
import MatchDetailsScreen from './screens/MatchDetailsScreen';
import AddMatchScreen from './screens/AddMatchScreen';

export default function App() {
	return (
		<Router>
			<Route path="/" exact component={SelectGroupScreen} />
			<Route path="/group/:id" exact component={MatchListScreen} />
			<Route path="/group/:id/matches/:matchId" exact component={MatchDetailsScreen} />		
			<Route path="/group/:id/add" exact component={AddMatchScreen} />		
		</Router>
	)
}