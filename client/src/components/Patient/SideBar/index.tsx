import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, Loader, Menu, Segment, Sidebar } from 'semantic-ui-react'

import './style.sass'

type PatientSideBarProps = {
  createMenuItems: () => ReactElement
}

const PatientSideBar = ({
  createMenuItems,
}: PatientSideBarProps): ReactElement => (
  <>
    <Menu
      vertical
      className="patient-sidebar"
    >
      {createMenuItems()}
    </Menu>
  </>
)

export default PatientSideBar
