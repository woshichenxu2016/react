import React, {Component} from 'react';
import Card from 'components/card';
import eventEmitter from 'utils/eventEmitter';

class List extends Component {
	constructor(options) {
		super(options);
		this.cli = this.cli.bind(this);
		this.state = {
			name: 'cx'
		};
	}

	componentDidMount() {
		eventEmitter.on('launch', data => {
			this.setState({
				name: data
			});
		});
	}

	cli() {
		this.setState({
			name: `${this.state.name}x`
		});
	}
	render() {
		return (
			<div>
				<span>List</span>
				<Card name={this.state.name} />
				<button onClick={this.cli}>list button</button>
			</div>
		);
	}
}

module.exports = List;
