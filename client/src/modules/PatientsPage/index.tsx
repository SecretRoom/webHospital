import React, { ReactElement, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPatientsA } from '../../containers/Patients/actions'
import PatientsWorkSpace from '../../containers/Patients/PatientsContainer'

type PatientsPageProps = {
  fetchPatients: (arg0: undefined) => void
}

const PatientsPage = ({
  fetchPatients,
}: PatientsPageProps): ReactElement => {
  useEffect(() => {
    fetchPatients(undefined)
  }, [])
  return (
    <PatientsWorkSpace />
  )
}

export default connect(
  () => ({}),
  {
    fetchPatients: fetchPatientsA.request,
  },
)(PatientsPage)
