import { Map } from 'immutable'

/** Стэйт модуля */
export const authStateS = (state: RootStateInterface): Map<string, any> => state.auth

export const isAuthenticatedS = (state: RootStateInterface): boolean => authStateS(state).get('isAuthenticated')
