import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Index from './components/Index';
import Archive from './components/Archive';
import Content from './components/Content';

export default (
	<Route component={App}>
		<Route path='/' component={Index} />
		<Route path='/archive' component={Archive} />
		<Route path='/article/:id' component={Content} />
	</Route>
);