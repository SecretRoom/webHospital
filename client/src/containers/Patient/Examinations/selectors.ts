import { Map } from 'immutable'

/** Стэйт модуля */
export const examinationStateS = (state: RootStateInterface): Map<string, any> => state.examination

export const isFetchingExamS = (state: RootStateInterface): boolean => examinationStateS(state).get('isFetching')

export const examListS = (state: RootStateInterface): any => examinationStateS(state).get('examList')

export const selectedExamS = (state: RootStateInterface): string => examinationStateS(state).get('selectedExam')
