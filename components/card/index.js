import React, {Component} from 'react';

class Card extends Component {

	render() {
		return (
			<div>
				<span>{this.props.name}</span>
			</div>
		);
	}
};

module.exports = Card;
