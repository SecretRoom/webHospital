import { createAsyncAction, createAction } from 'typesafe-actions'
import {
  FETCH_PATIENTS_ERROR,
  FETCH_PATIENTS_REQUEST,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENT_ERROR,
  FETCH_PATIENT_REQUEST,
  FETCH_PATIENT_SUCCESS,
} from './types'

export const fetchPatientsA = createAsyncAction(
  FETCH_PATIENTS_REQUEST,
  FETCH_PATIENTS_SUCCESS,
  FETCH_PATIENTS_ERROR,
)<
  any | undefined, any[], Error
>()

export const fetchPatientA = createAsyncAction(
  FETCH_PATIENT_REQUEST,
  FETCH_PATIENT_SUCCESS,
  FETCH_PATIENT_ERROR,
)<
  string, any, Error
>()
