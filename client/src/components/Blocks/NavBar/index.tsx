import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { Menu, Popup } from 'semantic-ui-react'
import ProfileMenu from './ProfileMenu/index'
import NavigateLinkGroup from './NavigateLinkGroup/index'
import './style.sass'
import { logoutA } from '../../../actions'
import { fioEmplS } from '../../../selectors'

type NavBarProps = {
  fioEmpl: string

  onLogout: () => void
  [key: string]: any
}

const NavBar = ({
  fioEmpl,
  onLogout,
}: NavBarProps): ReactElement => {
  // if (!profileList) return <nav className="navbar navbar-expand-lg navbar-light" />

  const trigger = (
    <Menu.Menu position="right">
      <Menu.Item className="main-navbar__item">
        <ProfileMenu
          fioEmpl={fioEmpl}
          // profileList={profileList}
          // onChangeProfile={onChangeProfile}
          onLogout={onLogout}
        // currentProfile={currentProfile}
        // appVersion={appVersion}
        />
      </Menu.Item>
    </Menu.Menu>
  )

  return (
    <Menu
      className="main-navbar bg-1"
      // ref={nav}
      size="mini"
    // onDoubleClick={({ target }) => {
    //   if (target.classList.contains('main-navbar')) {
    //     const className = Array.prototype.find.call(target.classList, cl => cl.match(/^bg/))
    //     target.classList.remove(className)
    //     let number = +className.match(/\d+/) + 1
    //     if (number === 15) {
    //       number = 0
    //     }
    //     target.classList.add(`bg-${number}`)
    //   }
    // }}
    >
      <NavigateLinkGroup />
      <Popup position="left center" size="mini" trigger={trigger} />
    </Menu>
  )
}

export default connect(
  (state): any => ({
    fioEmpl: fioEmplS(state),
  }),
  {
    onLogout: logoutA,
  },
)(NavBar)
