import React, {Component} from 'react';
import {render} from 'react-dom';
import Routes from 'components/routes'
import style from './index.less'

render(<Routes />, document.querySelector('#app'));

