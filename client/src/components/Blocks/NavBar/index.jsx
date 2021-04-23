import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Popup } from 'semantic-ui-react'
import ProfileMenu from './ProfileMenu'
import NavigateLinkGroup from './NavigateLinkGroup'
// import logo from '../../../img/logo.png'
import OptionsMenuContainer from '../../../containers/OptionsMenu/index.ts'
import './style.sass'

/**
 *
 * @param {object} props
 *
 * @example ./NavBar.example.md
 *
 */

const NavBar = ({
  profileList,
  navlinks,
  name,
  onChangeProfile,
  onLogout,
  currentProfile,
  isOnline,
  isShowF1Hint,
  isShowF2Hint,
  appVersion,
}) => {
  if (!profileList) return <nav className="navbar navbar-expand-lg navbar-light" />

  const trigger = (
    <Menu.Menu position="right">
      <Menu.Item className="main-navbar__item">
        <ProfileMenu
          name={name}
          profileList={profileList}
          onChangeProfile={onChangeProfile}
          onLogout={onLogout}
          currentProfile={currentProfile}
          appVersion={appVersion}
        />
      </Menu.Item>
    </Menu.Menu>
  )

  return (
    <Menu
      className="main-navbar bg-1"
      // ref={nav}
      size="mini"
      onDoubleClick={({ target }) => {
        if (target.classList.contains('main-navbar')) {
          const className = Array.prototype.find.call(target.classList, cl => cl.match(/^bg/))
          target.classList.remove(className)
          let number = +className.match(/\d+/) + 1
          if (number === 15) {
            number = 0
          }
          target.classList.add(`bg-${number}`)
        }
      }}
    >
      <OptionsMenuContainer />
      <NavigateLinkGroup navlinks={navlinks} isShowF1Hint={isShowF1Hint} isShowF2Hint={isShowF2Hint} />
      {!isOnline && (
        <div className="connection-indicator">
          <h1>OFFLINE</h1>
        </div>
      )}
      <Popup content={`${currentProfile.nmprof} / ${currentProfile.nmotdel}`} position="left center" size="mini" trigger={trigger} />
    </Menu>
  )
}

NavBar.defaultProps = {
  profileList: {},
  navlinks: [],
  name: '',
  currentProfile: {},
  isOnline: false,
  isShowF1Hint: false,
  isShowF2Hint: false,
  appVersion: '',
}

NavBar.propTypes = {
  navlinks: PropTypes.array,
  currentProfile: PropTypes.object,
  isOnline: PropTypes.bool,
  isShowF1Hint: PropTypes.bool,
  isShowF2Hint: PropTypes.bool,

  /** Список профилей пользователя */
  profileList: PropTypes.array,
  /** коллбэк для выхода из учетной записи */
  onLogout: PropTypes.func.isRequired,
  /** коллбэк для смены профиля */
  onChangeProfile: PropTypes.func.isRequired,
  /** Имя пользователя */
  name: PropTypes.string,
  appVersion: PropTypes.string,
}

export default NavBar

// <div className="collapse navbar-collapse" id="navbarSupportedContent">
// <ul className="navbar-nav mr-auto">
// <ProfileMenu
// name={name}
// profileList={profileList}
// onChangeProfile={onChangeProfile}
// onLogout={onLogout}
// currentProfile={currentProfile}
// />
// </ul>
// </div>
