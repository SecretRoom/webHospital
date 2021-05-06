import { createAction, createAsyncAction } from 'typesafe-actions'
import {
  FETCH_PATIENT_ERROR,
  FETCH_PATIENT_REQUEST,
  FETCH_PATIENT_SUCCESS,
  SELECT_PATIENT,
} from './types'

export const fetchPatientA = createAsyncAction(
  FETCH_PATIENT_REQUEST,
  FETCH_PATIENT_SUCCESS,
  FETCH_PATIENT_ERROR,
)<
  undefined, any, Error
>()

export const selectPatientA = createAction(
  SELECT_PATIENT,
)<string>()
