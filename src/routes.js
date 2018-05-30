import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
 
const Routes=()=>{
	return(
			<Layout>
			<Switch>
				<Route to='/' exact component={Home} />
			</Switch>
			</Layout>
		)
}

export default Routes;
