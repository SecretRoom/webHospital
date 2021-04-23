import { createSelector } from 'reselect';

/** @returns {string} cdsotr - ID текущего пользователя в связке с профилем */
export function currentEmployee(state) {
  return state.userData.currentProfile && state.userData.currentProfile.cdsotr;
}

const getRightsList = (state) => state.userData.lstrights;

export const rightsList = createSelector(
  getRightsList,
  (item) => item,
);

export const cdotdel = (state) => state.userData.currentProfile.cdotdel
export const cdprof = (state) => state.userData.currentProfile.cdprof
export const nmotdel = (state) => state.userData.currentProfile.nmotdel
export const cdsotr = (state) => state.userData.currentProfile.cdsotr
export const cdlpu = (state) => state.userData.currentProfile.cdlpu

export function getCurrentProfile(state) {
  return state.userData.currentProfile ? state.userData.currentProfile.cdsotr : ''
}

const userData = (state) => state.userData;
export const appVersion = createSelector(userData, state => {
  if (state.appVersion) return state.appVersion.split('/').join('.')
  return 'Unknown version'
})
