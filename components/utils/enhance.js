import React, {Component} from 'react';

const enhance = (OriginComponent) => class extends Component {

  payment() {
    console.log('i can pay');
  }

  render() {
    return (
      <OriginComponent payment={this.payment} {...this.props} />
    );
  }
};

export default enhance;
