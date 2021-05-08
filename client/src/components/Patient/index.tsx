import React, { ReactElement } from 'react'
import './style.sass'
import PatientExaminationsContainer from '../../containers/Patient/Examinations'
import PatientInfoContainer from '../../containers/Patient/Info'
import PatientSideBarContainer from '../../containers/Patient/SideBar'

type PatientWorkSpaceProps = {
  activeTab: string | undefined

  setActiveTab: any
}

const PatientWorkSpace = ({
  activeTab,
  setActiveTab,
}: PatientWorkSpaceProps): ReactElement => (
  <div id="patient-workspace">
    <PatientSideBarContainer setActiveTab={setActiveTab} />
    {activeTab === '0' && <PatientExaminationsContainer />}
    {activeTab === '1' && <PatientInfoContainer />}
  </div>
)

export default PatientWorkSpace
