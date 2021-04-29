import { createAsyncAction, createAction } from 'typesafe-actions'
import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS } from './types'

/** Получение списка назначений */
export const authA = createAsyncAction(
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
)<
{
  login: string,
  password: string,
},
any, Error>()
