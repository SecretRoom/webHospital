import React, { ReactElement, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import * as R from 'ramda'
import PatientWorkSpace from '../../components/Patient'
import { fetchPatientA } from './actions'
import { idPatS } from './selectors'

type PatientWorkSpaceContainerProps = {
  idPat: string

  fetchPatient: () => void
}

const PatientWorkSpaceContainer = ({
  idPat,
  fetchPatient,
}: PatientWorkSpaceContainerProps): ReactElement => {
  const history = useHistory()
  const [activeTab, setActiveTab] = useState<string>()

  useEffect(() => {
    switch (activeTab) {
      case '0':
        history.push(`/patients/${idPat}/examination`)
        break;
      case '1':
        history.push(`/patients/${idPat}/info`)
        break;
      default:
        break;
    }
    if (!R.isNil(activeTab)) sessionStorage.setItem('activeTab', activeTab)
  }, [activeTab])
  useEffect(() => {
    setActiveTab((sessionStorage.getItem('activeTab') || '0'))
    fetchPatient()
    return (() => {
      sessionStorage.removeItem('activeTab')
    })
  }, [])
  return (
    <PatientWorkSpace
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  )
}

export default connect(
  (state) => ({
    idPat: idPatS(state),
  }),
  {
    fetchPatient: fetchPatientA.request,
  },
)(PatientWorkSpaceContainer)
