import React, { Fragment } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types'

// import { addDots } from '../../../../utils';

import './style.sass';

/**
 *
 *
 * @class ProfileMenu
 * @extends {React.PureComponent}
 */
class ProfileMenu extends React.PureComponent {
  handleClickPreset = (event) => {
    const preset = event.target.id;
    this.props.onChangePreset(preset);
  };

  handleChange = (event) => {
    const profile = this.props.profileList.find(
      (profile) => profile.cdsotr === event.currentTarget.dataset.value,
    );
    this.props.onChangeProfile(profile);
  };

  isProfile() {
    return this.props.profileList.length > 0;
  }

  render() {
    const trigger = (
      <div className="profile-menu">
        <div className="userpic">
          <Icon name="user md" size="large" />
        </div>
        <div className="username">
          <h4>{this.props.name}</h4>
          <span>
            {`${this.props.currentProfile.nmprof}/${this.props.currentProfile.nmotdel}`}
            {/* {this.isProfile()
              ? `${addDots(this.props.currentProfile.nmprof, 10)}/${addDots(
                this.props.currentProfile.nmotdel,
                10,
              )}`
              : this.props.name} */}
          </span>
        </div>
      </div>
    );
    const options = [
      <Dropdown.Item key="current-profile">
        {this.isProfile() && (
          <div className="current-profile">
            <div className="profile-info institution">
              <h2>Медицинское учреждение</h2>
              <p>{this.props.currentProfile.nmlpu}</p>
            </div>
            <div className="profile-info departament">
              <h2>Отделение</h2>
              <p>{this.props.currentProfile.nmotdel}</p>
            </div>
            <div className="profile-info post">
              <h2>Должность</h2>
              <p>{this.props.currentProfile.nmprof}</p>
            </div>
            <div className="profile-info spec">
              <h2>Профиль</h2>
              <p>{this.props.currentProfile.nmprof}</p>
            </div>
            {/* <div className="profile-info role">
              <h2>Роль</h2>
              <p>
                {this.props.currentProfile.prizn === 1
                || this.props.currentProfile.prizn === 2
                  ? 'Врач'
                  : null}
              </p>
            </div> */}
          </div>
        )}
      </Dropdown.Item>,
      <Dropdown.Divider key="divider" />,
      <Dropdown.Header key="profiles" content={<h3>Профили</h3>} />,
      <Fragment key="fragment">
        {this.props.profileList.map((profile) => (
          <Dropdown.Item
            className={`profile-word-wrap ${profile.cdsotr === this.props.currentProfile.cdsotr ? 'active' : ''}`}
            icon="user"
            data-value={profile.cdsotr}
            key={profile.cdsotr}
            onClick={this.handleChange}
            content={`${profile.nmprof} / ${profile.nmotdel}`}
          />
        ))}
      </Fragment>,
      <div key="dropdown-divider" className="dropdown-divider" />,
      <Dropdown.Item
        key="logout"
        text="Выход"
        onClick={this.props.onLogout}
        icon="sign out"
      />,
      <Dropdown.Divider key="dividerforversion" />,
      <Dropdown.Item
        key="appversion"
        text={`Версия: ${this.props.appVersion}`}
        icon="globe"
      />,
    ];
    return (
      <Dropdown
        // className="profile-menu-wrapper"
        trigger={trigger}
        className="profile-menu-wrapper"
        options={options}
      />
    );
  }
}

ProfileMenu.defaultProps = {
  onChangePreset: () => {},
  profileList: [],
  onChangeProfile: () => {},
  currentProfile: {},
  name: '',
  onLogout: () => {},
  appVersion: '',
}

ProfileMenu.propTypes = {
  onChangePreset: PropTypes.func,
  profileList: PropTypes.array,
  onChangeProfile: PropTypes.func,
  currentProfile: PropTypes.object,
  name: PropTypes.string,
  onLogout: PropTypes.func,
  appVersion: PropTypes.string,
}

export default ProfileMenu;
