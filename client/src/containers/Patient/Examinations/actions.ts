import { createAction, createAsyncAction } from 'typesafe-actions'
import {
  CREATE_EXAM_ERROR,
  CREATE_EXAM_REQUEST,
  CREATE_EXAM_SUCCESS,
  FETCH_EXAM_LIST_ERROR,
  FETCH_EXAM_LIST_REQUEST,
  FETCH_EXAM_LIST_SUCCESS,
  SELECT_EXAM,
} from './types'

export const fetchExamListA = createAsyncAction(
  FETCH_EXAM_LIST_REQUEST,
  FETCH_EXAM_LIST_SUCCESS,
  FETCH_EXAM_LIST_ERROR,
)<
  undefined, any, Error
>()

export const createExamA = createAsyncAction(
  CREATE_EXAM_REQUEST,
  CREATE_EXAM_SUCCESS,
  CREATE_EXAM_ERROR,
)<
  string, undefined, Error
>()

export const selectExamA = createAction(
  SELECT_EXAM,
)<string>()

