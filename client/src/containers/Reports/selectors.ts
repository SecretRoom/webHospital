import { Map } from 'immutable'

/** Стэйт модуля */
export const reportsStateS = (state: RootStateInterface): Map<string, any> => state.reports

export const isFetchingReportsS = (state: RootStateInterface): boolean => reportsStateS(state).get('isFetching')
