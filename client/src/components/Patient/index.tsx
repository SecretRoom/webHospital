import React, { ReactElement } from 'react'
import './style.sass'
import PatientExaminationsContainer from '../../containers/Patient/Examinations'
import PatientSideBarContainer from '../../containers/Patient/SideBar'

type PatientWorkSpaceProps = {
  activeTab: number

  setActiveTab: any
}

const PatientWorkSpace = ({
  activeTab,
  setActiveTab,
}: PatientWorkSpaceProps): ReactElement => (
  <div id="patient-workspace">
    <PatientSideBarContainer setActiveTab={setActiveTab} />
    {activeTab === 0 && <PatientExaminationsContainer />}
  </div>
)

export default PatientWorkSpace
