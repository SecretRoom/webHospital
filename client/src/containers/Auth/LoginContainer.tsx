import React, { ReactElement, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { authA } from '../../actions'
import Login from '../../components/Auth'

type LoginContainerProps = {
  auth: ({ userName, password }: { userName: string, password: string }) => void
}

const LoginContainer = ({ auth }: LoginContainerProps): ReactElement => {
  const [password, setPassword] = useState<string>('')
  const [userName, setUserName] = useState<string>('')

  const [errorName, setErrorName] = useState<any>([])
  const [errorPass, setErrorPass] = useState<any>([])

  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true)

  useEffect(() => {
    setUserName(sessionStorage.getItem('login') ? sessionStorage.getItem('login') || '' : '')
  }, [])

  const onSubmit = (e: any): void => {
    e.preventDefault()
    // authenticated = true
    sessionStorage.setItem('login', userName || '')
    auth({ userName, password })
    // getAppVersion()
  }

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
    <Login
      password={password}
      userName={userName}
      errorName={errorName}
      errorPass={errorPass}
      hiddenPassword={hiddenPassword}
      onSubmit={onSubmit}
      handleChange={handleChange}
      handleClickEye={handleClickEye}
    />
  )
}

export default connect(
  () => ({}),
  {
    auth: authA.request,
  },
)(LoginContainer)
