import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import history from 'components/history';
import All from 'components/all';
import Detail from 'components/detail';
import List from 'components/list';


class MyRoute extends Component {
	render() {
		return (
			<HashRouter history={history}>
				<div>
					<Route exact path='/' component={All} />
					<Route path='/detail' component={Detail} />
					<Route path='/list' component={List} />
				</div>
			</HashRouter>
		);
	}
}

module.exports = MyRoute;