import React, {Component} from 'react';
import {render} from 'react-dom';
import loadable from 'react-loadable';
import Routes from 'components/routes';
import {createStore} from 'redux';
import style from './index.less';

const AsyncAll = loadable({
  loader: () => import('components/all'),
  loading: null
});

render(<AsyncAll />, document.querySelector('#app'));
