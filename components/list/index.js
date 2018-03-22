import React, {Component} from 'react';
import Card from 'components/card';

class List extends Component {
	constructor(options) {
		super(options);
		this.cli = this.cli.bind(this);
		this.state = {
			name: 'cx'
		};
	}

	render() {
		return (
			<div>
				<span>List</span>
				<Card name={this.state.name}/>
				<button onClick={this.cli}></button>
			</div>
		);
	}

	cli() {
		this.setState({
			name: this.state.name + 'x'
		})
	}
};

module.exports = List;
