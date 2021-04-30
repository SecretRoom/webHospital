import React from 'react'
import {
  Redirect,
} from 'react-router-dom'
import LoginPage from '../modules/LoginPage/index.tsx'

import TestPage from '../modules/TestPage'

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
  {
    title: '',
    path: '/login',
    component: LoginPage,
    rights: {
      show: '',
      edit: '',
    },
    profile: 'ALL',
    showNavLink: false,
    isPrivate: false,
    exact: true,
  },
]

export default routes
