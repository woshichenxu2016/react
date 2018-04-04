import React, {Component} from 'react';
import eventEmitter from 'utils/eventEmitter';
import style from './index.less';

class Card extends Component {
	constructor(options) {
		super(options);
		this.state = { count: 0 };
	}

	componentWillMount() {
		console.log('componentWillMount')
		this.setState({
			count: this.state.count + 1
		});
		this.setState({
			count: this.state.count + 3
		});
		console.log('!!!@@@###111');console.log(this.state.count);console.log('!!!@@@###111')
		setTimeout(() => {
			this.setState({
				count: this.state.count + 19
			});
			this.setState({
				count: this.state.count + 17
			});
			console.log('!!!@@@###222');console.log(this.state.count);console.log('!!!@@@###222')
		}, 0);
	}

	componentDidMount() {
				console.log('componentDidMount')
		this.setState({
			count: this.state.count + 34
		});
		this.setState({
			count: this.state.count + 54
		});
		console.log('!!!@@@###333');console.log(this.state.count);console.log('!!!@@@###333')
		setTimeout(() => {
			this.setState({
				count: this.state.count + 100
			});
			this.setState({
				count: this.state.count + 200
			});
			console.log('!!!@@@###444');console.log(this.state.count);console.log('!!!@@@###444')
		}, 0);
	}

	render() {
		console.log('render')
		return (
			<div className={style.card}>
				<p>{this.state.count}</p>
			</div>
		);
	}

	shouldComponentUpdate(){
		return false
	}

}

module.exports = Card;
