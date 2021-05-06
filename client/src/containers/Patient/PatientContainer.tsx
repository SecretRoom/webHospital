import React, { ReactElement, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PatientWorkSpace from '../../components/Patient'
import { fetchPatientA } from './actions'

type PatientWorkSpaceContainerProps = {
  fetchPatient: () => void
}

const PatientWorkSpaceContainer = ({
  fetchPatient,
}: PatientWorkSpaceContainerProps): ReactElement => {
  const [activeTab, setActiveTab] = useState<number>(0)
  useEffect(() => {
    fetchPatient()
  }, [])
  return (
    <PatientWorkSpace
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  )
}

export default connect(
  () => ({}),
  {
    fetchPatient: fetchPatientA.request,
  },
)(PatientWorkSpaceContainer)
