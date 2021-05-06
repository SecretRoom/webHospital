import { ActionType, getType } from 'typesafe-actions'
import { Map } from 'immutable'
import { fetchPatientA, selectPatientA } from './actions'

type patientState = any

const INITIAL_STATE = Map<patientState>({
  isFetching: false,
  idPat: sessionStorage.getItem('idPat') || '',
  fullName: '',
  surname: '',
  name: '',
  patronymic: '',
  shortName: '',
  birthday: '',
  sex: '',
  phone: '',
  email: '',
  oms: '',
  omsCompany: '',
  snils: '',
})

export default function reducer(
  state = INITIAL_STATE,
  action: ActionType<
    typeof fetchPatientA
    | typeof selectPatientA
  >): typeof INITIAL_STATE {
  switch (action.type) {
    case getType(fetchPatientA.request): {
      return state
        .set('isFetching', true)
    }
    case getType(fetchPatientA.success): {
      const {
        fullName,
        surname,
        name,
        patronymic,
        shortName,
        birthday,
        sex,
        phone,
        email,
        oms,
        omsCompany,
        snils,
      } = action.payload
      return state
        .set('sex', sex)
        .set('oms', oms)
        .set('name', name)
        .set('phone', phone)
        .set('email', email)
        .set('snils', snils)
        .set('surname', surname)
        .set('isFetching', false)
        .set('fullName', fullName)
        .set('birthday', birthday)
        .set('shortName', shortName)
        .set('patronymic', patronymic)
        .set('omsCompany', omsCompany)
    }
    case getType(fetchPatientA.failure): {
      return state
        .set('isFetching', false)
    }
    case getType(selectPatientA): {
      sessionStorage.setItem('idPat', action.payload)
      return state
        .set('idPat', action.payload)
    }
    default:
      return state
  }
}
