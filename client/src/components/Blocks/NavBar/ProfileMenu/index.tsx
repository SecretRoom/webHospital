import React, { Fragment, ReactElement } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types'

// import { addDots } from '../../../../utils';

import './style.sass';

type ProfileMenuProps = {
  fioEmpl: string

  onLogout: () => void
}
const ProfileMenu = ({
  fioEmpl,
  onLogout,
}: ProfileMenuProps): ReactElement => {
  const trigger = (
    <div className="profile-menu">
      <div className="userpic">
        <Icon name="user md" size="large" />
      </div>
      <div className="username">
        <h4>{fioEmpl}</h4>
      </div>
    </div>
  );
  const options = [
    <Dropdown.Item
      key="logout"
      text="Выход"
      onClick={(): void => onLogout()}
      icon="sign out"
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

export default ProfileMenu;
