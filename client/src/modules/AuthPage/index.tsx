import React, { useState, ReactElement, useEffect } from 'react';
import { Button, Checkbox, Form, Icon } from 'semantic-ui-react';

import './style.css'

type LoginPageProps ={
  auth: Function
  // isFetching: boolean
  getAppVersion: Function
}

// let authenticated = false

const LoginPage = ({
  auth,
  // isFetching,
  getAppVersion,
}: LoginPageProps): ReactElement => {
  const [password, setPassword] = useState<string>('')
  const [userName, setUserName] = useState<string|null>('')

  const [errorName, setErrorName] = useState<any>([])
  const [errorPass, setErrorPass] = useState<any>([])

  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true)

  useEffect(() => {
    setUserName(sessionStorage.getItem('login') ? sessionStorage.getItem('login') : '')
  }, [])

  const onSubmit = (e: any): void => {
    e.preventDefault();
    // authenticated = true
    sessionStorage.setItem('login', userName || '')
    auth(userName, password);
    getAppVersion();
  };

  const handleChange = (e: any, { id, value }: any): void => {
    if (id === 'username') {
      setUserName(value)
      setErrorName(!!value)
    } else {
      setPassword(value)
      setErrorPass(!!value)
    }
  }

  const handleClickEye = (): void => {
    setHiddenPassword((prevHiddenPassword) => !prevHiddenPassword)
    const input = document.getElementById('password')
    // eslint-disable-next-line no-unused-expressions
    input?.focus()
  }

  return (
    <main className="auth">
      login
      {/* <Form id="login_form" onSubmit={(e: any): any => onSubmit(e)}>
        <Form.Field className="label_title">
          <h1>
            АВТОРИЗАЦИЯ
          </h1>
        </Form.Field>
        <Form.Field>
          <Form.Input
            error={
              errorName
                ? null
                : { content: 'Пожалуйста, введите имя пользователя', pointing: 'below' }
            }
            fluid
            id="username"
            onChange={(e: any, data: any): any => handleChange(e as never, data)}
            value={userName}
            placeholder="Имя пользователя"
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            error={
              errorPass
                ? null
                : 'Пожалуйста, введите пароль'
            }
            fluid
            type={hiddenPassword ? 'password' : 'text'}
            id="password"
            icon={(
              <Icon
                link
                onClick={handleClickEye}
                name={hiddenPassword ? 'eye slash' : 'eye'}
              />
            )}
            autoComplete="on"
            value={password}
            onChange={(e: any, data: any): any => handleChange(e, data)}
            placeholder="Пароль"
          />
        </Form.Field>
        <Form.Field className="btn_in">
          <Checkbox label="Запомнить" />
          <Button content="Вход" primary type="submit" />
        </Form.Field>
      </Form> */}
    </main>
  );
}

export default LoginPage;
