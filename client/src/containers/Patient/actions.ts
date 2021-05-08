import { createAction, createAsyncAction } from 'typesafe-actions'
import {
  FETCH_PATIENT_ERROR,
  FETCH_PATIENT_REQUEST,
  FETCH_PATIENT_SUCCESS,
  SELECT_PATIENT,
  UPDATE_PATIENT_ERROR,
  UPDATE_PATIENT_REQUEST,
  UPDATE_PATIENT_SUCCESS,
} from './types'

export const fetchPatientA = createAsyncAction(
  FETCH_PATIENT_REQUEST,
  FETCH_PATIENT_SUCCESS,
  FETCH_PATIENT_ERROR,
)<
  undefined, any, Error
>()

export const updatePatientA = createAsyncAction(
  UPDATE_PATIENT_REQUEST,
  UPDATE_PATIENT_SUCCESS,
  UPDATE_PATIENT_ERROR,
)<
  any, undefined, Error
>()

export const selectPatientA = createAction(
  SELECT_PATIENT,
)<string>()
