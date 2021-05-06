import { Map } from 'immutable'

/** Стэйт модуля */
export const patientStateS = (state: RootStateInterface): Map<string, any> => state.patient

export const isFetchingPatientS = (state: RootStateInterface): boolean => patientStateS(state).get('isFetching')

export const idPatS = (state: RootStateInterface): string => patientStateS(state).get('idPat')
