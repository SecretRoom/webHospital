import { ActionType, getType } from 'typesafe-actions'
import { Map, List } from 'immutable'
import * as R from 'ramda'
import { authA } from './actions'

type authState = any

const INITIAL_STATE = Map<authState>({
  isAuthenticated: false,
  isFetching: false,
})

export default function reducer (
  state = INITIAL_STATE,
  action: ActionType<
  typeof authA
  >): typeof INITIAL_STATE {
  switch (action.type) {
    case getType(authA.request): {
      return state
        .set('isFetching', true)
    }
    case getType(authA.success): {
      return state
        .set('isAuthenticated', true)
        .set('isFetching', false)
    }
    case getType(authA.failure): {
      return state
        .set('isFetching', false)
    }
    default:
      return state
  }
}
