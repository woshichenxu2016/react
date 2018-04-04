import React, {Component} from 'react';
import Union from 'components/union';
import enhance from 'components/utils/enhance';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import store from 'components/store';
import superagent from 'superagent';
import {bindActionCreators} from 'redux';

let createAction = {
  inc: (count) => ({type: 'inc', payload: count}),
  dec: (count) => ({type: 'dec', payload: count})
};

class All extends Component {
  constructor(options) {
    super(options);
    this.state = {count: 0};
    store.subscribe(() => {
      let count = store.getState().numberReducer.count;
      this.setState({
        count
      });
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    let flag = PureRenderMixin.shouldComponentUpdate.apply(this, [nextProps, nextState]);
    console.log(flag);
    return flag;
  }

  inc() {
    // let promise = new Promise((resolve) => {
    //   superagent
    //   .get('/api/data')
    //   .query({name: 'aaa'})
    //   .end((err, res) => {
    //     if (!err) {
    //       resolve(res.body.count);
    //     }
    //   });
    // });
    // let ret = store.dispatch({type: 'inc', payload: promise});
    bindActionCreators(createAction, store.dispatch).dec(3);
  }

  dec() {
    store.dispatch({type: 'dec', payload: 2});
  }

  render() {
    return (
      <div>
        <button onClick={this.inc}>加1</button>
        <button onClick={this.dec}>减1</button>
        <p>{this.state.count}</p>
        <Union name="u name" onMouseMove={this.cli} />
      </div>
    );
  }

}

module.exports = All;
