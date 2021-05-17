import { ActionType, getType } from 'typesafe-actions'
import { Map } from 'immutable'

import { fetchReportA } from './actions'

type reportsState = any

const INITIAL_STATE = Map<reportsState>({
  isFetching: false,
})

export default function reducer(
  state = INITIAL_STATE,
  action: ActionType<
    typeof fetchReportA
  >): typeof INITIAL_STATE {
  switch (action.type) {
    case getType(fetchReportA.request): {
      return state
        .set('isFetching', true)
    }
    case getType(fetchReportA.success): {
      return state
        .set('isFetching', false)
    }
    case getType(fetchReportA.failure): {
      return state
        .set('isFetching', false)
    }
    default:
      return state
  }
}
