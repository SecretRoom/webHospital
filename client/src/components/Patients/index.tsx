import React, { ReactElement } from 'react'

import './style.sass'
import PatientsFilterContainer from '../../containers/Patients/Filter'
import PatientsContentContainer from '../../containers/Patients/Content'

const PatientsWorkSpace = (): ReactElement => (
  <div id="patient-workspace">
    <PatientsFilterContainer />
    <PatientsContentContainer />
  </div>
)

export default PatientsWorkSpace
