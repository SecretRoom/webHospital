
import React from 'react';
import {
  Redirect,
} from 'react-router-dom';

import TestPage from '../modules/TestPage';

const routes = [
  {
    title: '',
    path: '/',
    render: () => (
      <Redirect
        to="/login"
      />
    ),
    rights: {
      show: '',
      edit: '',
    },
    profile: 'ALL',
    isPrivate: false,
    exact: true,
  },
  {
    title: 'test',
    path: '/test',
    component: TestPage,
    rights: {
      show: '',
      edit: '',
    },
    profile: 'ALL',
    isPrivate: false,
    exact: true,
  },
];

export default routes
