import * as React from 'react';
import { Link, match } from 'react-router-dom';
import { Group } from '../types';
import styled from 'styled-components';
import variables from '../style-variables';

const HeaderContainer = styled.div`
	background: #000;
	display: flex;
`

const ScreenTitle = styled.a`
	color: #fff;
	font-weight: bold;
	padding: 1em;

	::hover,
	::active,
	::focus {
		color: #fff;
	}
`

const BackButton = styled.div`
	display: flex;

	a {
		color: #fff;
		flex: 1 0 auto;
		padding: 1em;
		text-decoration: none;
	}
`

export default function HeaderComponent(props: any) {
	if (props.backButtonUrl) {
		return (
			<HeaderContainer>
				<BackButton>
					<Link to={props.backButtonUrl} >&lt; Back</Link>
				</BackButton>
				<ScreenTitle>{props.screenTitle}</ScreenTitle>
			</HeaderContainer>
		)
	}
	else {
		return (
			<HeaderContainer>
				<ScreenTitle>{props.screenTitle}</ScreenTitle>
			</HeaderContainer>
		)
	}
}
