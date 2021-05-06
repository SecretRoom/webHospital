/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ReactElement, SyntheticEvent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react'
import moment from 'moment'
import PatientExaminations from '../../../components/Patient/Examinations'
import getStore from '../../../services/IndexedDB/getStore'
import { examListS, isFetchingExamS, selectedExamS } from './selectors'
import { createExamA, fetchExamListA, selectExamA } from './actions'
import { idPatS } from '../selectors'

type PatientsExaminationsContainerProps = {
  idPat: string
  selectedExam: string

  examList: any[]

  isFetching: boolean

  fetchExamList: () => void
  selectExam: (id: string) => void
  createExam: (idType: string) => void
}

const PatientsExaminationsContainer = ({
  idPat,
  examList,
  isFetching,
  selectedExam,

  selectExam,
  createExam,
  fetchExamList,
}: PatientsExaminationsContainerProps): ReactElement => {
  const [openPortal, setOpenPortal] = useState<boolean>(false)
  const [hiddenSidebar, setHiddenSidebar] = useState<boolean>(false)

  const history = useHistory()

  const handleChangeHidden = (): void => setHiddenSidebar(prev => !prev)

  const handleChangeOpenPortal = (): void => setOpenPortal(prev => !prev)

  const createMenuItem = (list: any): any => {
    const createNew = (): ReactElement => (
      <Menu.Item
        as="a"
        key={Math.random().toString()}
        onClick={() => {
          handleChangeOpenPortal()
        }}
      >
        <Icon name="plus" />
      </Menu.Item>
    )
    const newlist = R.prepend(createNew(), R.map((item) => (
      <Menu.Item
        as="a"
        key={Math.random().toString()}
        onClick={() => {
          handleChangeHidden()
          selectExam(item.id)
        }}
      >
        <h4>{item.examTypeName}</h4>
        <h5>{moment(item.dateExam).format('DD.MM.YYYY HH:MM')}</h5>
        <h5>{item.fioEmpl}</h5>
      </Menu.Item>
    ), list))

    return newlist
  }

  const createExamTypeList = (): ReactElement => (
    <Menu.Item />
  )

  useEffect(() => {
    if (!R.isEmpty(selectedExam)) history.push(`/patients/${idPat}/examination/${selectedExam}`)
  }, [selectedExam])

  useEffect(() => {
    fetchExamList()
  }, [])
  return (
    <PatientExaminations
      examList={examList}
      openPortal={openPortal}
      isFetching={isFetching}
      hiddenSidebar={hiddenSidebar}
      createMenuItem={createMenuItem}
      createExamTypeList={createExamTypeList}
      handleChangeHidden={handleChangeHidden}
      handleChangeOpenPortal={handleChangeOpenPortal}
    />
  )
}

export default connect(
  (state) => ({
    idPat: idPatS(state),
    examList: examListS(state),
    selectedExam: selectedExamS(state),
    isFetching: isFetchingExamS(state),
  }),
  {
    selectExam: selectExamA,
    createExam: createExamA.request,
    fetchExamList: fetchExamListA.request,
  },
)(PatientsExaminationsContainer)
