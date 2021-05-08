import React, { ReactElement, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'
import { useHistory } from 'react-router'
import { Icon, Menu } from 'semantic-ui-react'
import PatientExaminations from '../../../components/Patient/Examinations'
import getStore from '../../../services/IndexedDB/getStore'
import { examListS, isFetchingExamS, selectedExamS } from './selectors'
import { createExamA, fetchExamListA, selectExamA } from './actions'
import { idPatS } from '../selectors'

type PatientExaminationsContainerProps = {
  idPat: string
  selectedExam: string

  examList: any[]

  isFetching: boolean

  fetchExamList: () => void
  selectExam: (id: string) => void
  createExam: (idType: string) => void
}

const PatientExaminationsContainer = ({
  idPat,
  examList,
  isFetching,
  selectedExam,

  selectExam,
  createExam,
  fetchExamList,
}: PatientExaminationsContainerProps): ReactElement => {
  const [openPortal, setOpenPortal] = useState<boolean>(false)
  const [hiddenSidebar, setHiddenSidebar] = useState<boolean>(false)

  const [examTypes, setExamTypes] = useState<any[]>([])
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
        <Icon
          color="green"
          name="plus"
        />
      </Menu.Item>
    )
    const newlist = R.prepend(createNew(), R.map((item) => (
      <Menu.Item
        as="a"
        active={item.id === selectedExam}
        key={Math.random().toString()}
        onClick={() => {
          handleChangeHidden()
          selectExam(item.id)
        }}
      >
        <h4>{item.examTypeName}</h4>
        <span>{`${item.dateExam} / ${item.fioEmpl}`}</span>
      </Menu.Item>
    ), list))

    return newlist
  }

  const createExamTypeList = (): ReactElement[] => R.map(
    (item) => (
      <Menu.Item
        content={<h4>{item.name}</h4>}
        onClick={() => {
          createExam(item.id)
          handleChangeOpenPortal()
          handleChangeHidden()
        }}
        key={Math.random().toString()}
      />
    ),
    examTypes,
  )

  useEffect(() => {
    if (!R.isEmpty(selectedExam)) history.push(`/patients/${idPat}/examination/${selectedExam}`)
  }, [selectedExam])

  useEffect(() => {
    fetchExamList()
    getStore.examTypes(undefined).then((res) => setExamTypes(res))
    return (() => {
      selectExam('')
    })
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
)(PatientExaminationsContainer)
