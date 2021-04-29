import React, { useState, ReactElement, useEffect } from 'react'
import { Button, Checkbox, Form, Icon } from 'semantic-ui-react'
import LoginContainer from '../../containers/Auth/LoginContainer'
import routsManager from '../../routes/index'

const LoginPage = (): ReactElement => {
  return (
    <LoginContainer />
  )
}

export default LoginPage

routsManager.registerRoute({
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
})
