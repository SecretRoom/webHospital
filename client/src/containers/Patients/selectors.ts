import { Map } from 'immutable'

/** Стэйт модуля */
export const patientsStateS = (state: RootStateInterface): Map<string, any> => state.auth

export const isFetchingPatientsListS = (state: RootStateInterface): boolean => patientsStateS(state).get('isFetching')

export const patientListS = (state: RootStateInterface): any[] => patientsStateS(state).get('patientList')
