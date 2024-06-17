import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Page } from '../constant';
import AusChampionship from '../pages/Activity/AusChampionship';

export default function RoutesList(): React.ReactElement {
	return (
		<Routes>
			<Route path='*' element={<AusChampionship />} />
		</Routes>
	);
}
