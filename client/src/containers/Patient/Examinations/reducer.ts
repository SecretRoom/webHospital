import { ActionType, getType } from 'typesafe-actions'
import { Map } from 'immutable'
import { createExamA, fetchExamListA, selectExamA } from './actions'

type examinationState = any

const INITIAL_STATE = Map<examinationState>({
  isFetching: false,
  examList: [],
  selectedExam: '',
})

export default function reducer(
  state = INITIAL_STATE,
  action: ActionType<
    typeof fetchExamListA
    | typeof createExamA
    | typeof selectExamA
  >): typeof INITIAL_STATE {
  switch (action.type) {
    case getType(fetchExamListA.request): {
      return state
        .set('isFetching', true)
    }
    case getType(fetchExamListA.success): {
      return state
        .set('isFetching', false)
        .set('examList', action.payload)
    }
    case getType(fetchExamListA.failure): {
      return state
        .set('isFetching', false)
    }
    case getType(createExamA.request): {
      return state
        .set('isFetching', true)
    }
    case getType(createExamA.success): {
      return state
        .set('isFetching', false)
    }
    case getType(createExamA.failure): {
      return state
        .set('isFetching', false)
    }
    case getType(selectExamA): {
      return state
        .set('selectedExam', action.payload)
    }
    default:
      return state
  }
}
