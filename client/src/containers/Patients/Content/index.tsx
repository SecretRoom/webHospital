import React, { ReactElement, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PatientsContent from '../../../components/Patients/Content'

type PatientsContentContainerProps = {
}

const PatientsContentContainer = (): ReactElement => {
  return (
    <PatientsContent />
  )
}

export default PatientsContentContainer
