import { Map } from 'immutable'

/** Стэйт модуля */
export const userDataStateS = (state: RootStateInterface): Map<string, any> => state.userData

export const isFetchingS = (state: RootStateInterface): boolean => userDataStateS(state).get('isFetching')

export const messageS = (state: RootStateInterface): string => userDataStateS(state).get('message')

export const fioEmplS = (state: RootStateInterface): string => userDataStateS(state).get('fioEmpl')

export const idEmplS = (state: RootStateInterface): string => userDataStateS(state).get('idEmpl')

