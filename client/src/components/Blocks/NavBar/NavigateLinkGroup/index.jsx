import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import { Dropdown, Menu, Popup } from 'semantic-ui-react';
import { GlobalHotKeys } from 'react-hotkeys';

function NavigateLinkGroup({
  navlinks,
  isShowF1Hint,
  isShowF2Hint,
}) {
  const [mainLinks, setMainLinks] = useState([]);
  const [dropLinks, setDropLinks] = useState([]);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  const history = useHistory();

  // пути для верхнего меню
  const pathName = {
    reception: '/reception',
    patients: '/patients',
    biomaterials: '/biomaterials/',
    analyzers: '/analyzers/',
    commission: '/commission/',
    testtubes: '/test-tubes',
    reports: '/reports/',
    directoriesEmc: '/directories/emc/',
    directoriesCommon: '/directories/common/',
    hospitalizedReferral: '/hospitalized/referral/',
    hospitalizedDepartment: '/hospitalized/department/',
  }
  // id для верхнего меню
  const idName = {
    reception: 'reception-menu',
    patients: 'patients-menu',
    biomaterials: 'biomaterials-menu',
    analyzers: 'analyzers-menu',
    testtubes: 'test-tubes-menu',
    reports: 'reports-menu',
    commission: 'commission-menu',
    directories: 'directories-menu',
    directoriesEmc: 'directories-emc-menu',
    directoriesCommon: 'directories-common-menu',
    hospitalized: 'hospitalized-menu',
    hospitalizedReferral: 'hospitalized-referral-menu',
    hospitalizedDepartment: 'hospitalized-department-menu',
    more: 'more-menu',
  }

  const getClientWidth = () => {
    setCurrentWidth(window.innerWidth);
  };

  const isAriaExpanded = (id) => {
    const elem = document.getElementById(id);
    if (!elem) return false;
    if (elem.getAttribute('aria-expanded') === 'true') return true;
    return false;
  }

  const computedLinkSet = () => {
    const maxLinks = currentWidth / 230;
    const mainLinks = navlinks.slice(0, maxLinks);
    const dropLinks = navlinks.slice(maxLinks).map((link) => (
      <Popup
        key={link.path}
        open={
          (isShowF1Hint && (link.id === idName.reception || link.id === idName.patients)
          || isShowF2Hint && (link.id !== undefined)) && isAriaExpanded(idName.more)
        }
        size="mini"
        position="left center"
        content={
          () => {
            if (isShowF1Hint) {
              switch (link.id) {
                case idName.reception:
                  return 'Ctrl + K';
                case idName.patients:
                  return 'Alt + K';
                default:
                  return false;
              }
            }
            if (isShowF2Hint) {
              switch (link.id) {
                case idName.reception:
                  return 'Р';
                case idName.patients:
                  return 'П';
                case idName.biomaterials:
                  return 'Б';
                case idName.analyzers:
                  return 'А';
                case idName.testtubes:
                  return 'К';
                case idName.reports:
                  return 'О';
                default:
                  return false;
              }
            }
            return false;
          }
        }
        trigger={(
          <Dropdown.Item
            id={link.id}
            className="main-navbar__item__dropdown"
            as={NavLink}
            to={link.path}
            key={link.path}
          >
            {link.title}
          </Dropdown.Item>
        )}
      />
    ));
    setMainLinks(mainLinks);
    setDropLinks(dropLinks);
  };

  useEffect(() => {
    window.addEventListener('resize', getClientWidth);
    computedLinkSet();
    return () => {
      window.removeEventListener('resize', getClientWidth);
    }
  }, [])

  useEffect(() => {
    computedLinkSet();
  }, [currentWidth, isShowF1Hint, isShowF2Hint])

  const handleClickElem = (id, event) => {
    event.preventDefault();
    const elem = document.getElementById(id);
    if (elem) elem.click();
  }
  const handleLinkPath = (path, id, event) => {
    event.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      if (dropLinks.find((item) => item.key === path)) document.getElementById(idName.more).focus()
      else if (id === idName.hospitalizedDepartment || id === idName.hospitalizedReferral) document.getElementById(idName.hospitalized).focus()
      else if (id === idName.directoriesEmc || id === idName.directoriesCommon) document.getElementById(idName.directories).focus()
      else elem.focus();
      history.push(path);
    }
  }
  // горячие клавиши
  const keyMap = {
    TO_RECEPTION_Q: ['ctrl+k', 'ctrl+л'],
    TO_PATIENTS_Q: ['alt+k', 'alt+л'],
  }
  const handlers = {
    TO_RECEPTION_Q: (event) => handleLinkPath(pathName.reception, idName.reception, event),
    TO_PATIENTS_Q: (event) => handleLinkPath(pathName.patients, idName.patients, event),
  }
  // горячие клавиши по F2
  const keyMapF2 = {
    TO_RECEPTION: ['р', 'h'],
    TO_PATIENTS: ['п', 'g'],
    TO_BIOMATERIALS: ['б', ','],
    TO_ANALYZERS: ['а', 'f'],
    TO_TEST_TUBES: ['к', 'r'],
    TO_DIRECTORIES: ['с', 'c'],
    TO_DIRECTORIES_EMC: ['э', '\''],
    TO_DIRECTORIES_COMMON: ['щ', 'o'],
    TO_REPORTS: ['о', 'j'],
    TO_HOSPITALIZED: ['ц', 'w'],
    TO_HOSPITALIZED_REFERRAL: ['в', 'd'],
    TO_HOSPITALIZED_DEPARTMENT: ['е', 't'],
    TO_MORE: ['ё', '`'],
  }
  const handlersF2 = {
    TO_RECEPTION: (event) => handleLinkPath(pathName.reception, idName.reception, event),
    TO_PATIENTS: (event) => handleLinkPath(pathName.patients, idName.patients, event),
    TO_BIOMATERIALS: (event) => handleLinkPath(pathName.biomaterials, idName.biomaterials, event),
    TO_ANALYZERS: (event) => handleLinkPath(pathName.analyzers, idName.analyzers, event),
    TO_TEST_TUBES: (event) => handleLinkPath(pathName.testtubes, idName.testtubes, event),
    TO_DIRECTORIES: (event) => handleClickElem(idName.directories, event),
    TO_DIRECTORIES_EMC: (event) => handleLinkPath(pathName.directoriesEmc, idName.directoriesEmc, event),
    TO_DIRECTORIES_COMMON: (event) => handleLinkPath(pathName.directoriesCommon, idName.directoriesCommon, event),
    TO_REPORTS: (event) => handleLinkPath(pathName.reports, idName.reports, event),
    TO_HOSPITALIZED: (event) => handleClickElem(idName.hospitalized, event),
    TO_HOSPITALIZED_REFERRAL: (event) => handleLinkPath(pathName.hospitalizedReferral, idName.hospitalizedReferral, event),
    TO_HOSPITALIZED_DEPARTMENT: (event) => handleLinkPath(pathName.hospitalizedDepartment, idName.hospitalizedDepartment, event),
    TO_MORE: (event) => handleClickElem(idName.more, event),
  }

  return (
    <>
      {mainLinks.map(({ title, path, dropdown, id }) => {
        if (dropdown === true) {
          const dropItems = path.map(item => (
            <Popup
              key={item.path}
              open={isShowF2Hint && (item.id !== undefined) && isAriaExpanded(id)}
              size="mini"
              position="left center"
              content={
                () => {
                  switch (item.id) {
                    case idName.directoriesEmc:
                      return 'Э';
                    case idName.directoriesCommon:
                      return 'Щ';
                    case idName.hospitalizedReferral:
                      return 'В';
                    case idName.hospitalizedDepartment:
                      return 'Е';
                    default:
                      return false;
                  }
                }
              }
              trigger={(
                <Dropdown.Item
                  id={item.id}
                  className="main-navbar__item__dropdown"
                  as={NavLink}
                  to={item.path}
                  key={item.path}
                > {item.title}
                </Dropdown.Item>
              )}
            />
          ),
          )
          return (
            <Popup
              key={title}
              open={isShowF2Hint && (id !== undefined)}
              size="mini"
              position="bottom center"
              content={
                () => {
                  switch (id) {
                    case idName.directories:
                      return 'С';
                    case idName.hospitalized:
                      return 'Ц';
                    default:
                      return false;
                  }
                }
              }
              trigger={(
                <Dropdown
                  id={id}
                  className="main-navbar__item"
                  item
                  key={title}
                  text={title}
                  options={dropItems}
                />
              )}
            />
          )
        }
        return (
          <Popup
            key={path}
            open={
              (isShowF2Hint && (id !== undefined))
              || (isShowF1Hint && (
                id === idName.reception
                || id === idName.patients
              ))
            }
            size="mini"
            position="bottom center"
            content={
              () => {
                if (isShowF1Hint) {
                  switch (id) {
                    case idName.reception:
                      return 'Ctrl + K';
                    case idName.patients:
                      return 'Alt + K';
                    default:
                      return false;
                  }
                }
                if (isShowF2Hint) {
                  switch (id) {
                    case idName.reception:
                      return 'Р';
                    case idName.patients:
                      return 'П';
                    case idName.biomaterials:
                      return 'Б';
                    case idName.analyzers:
                      return 'А';
                    case idName.testtubes:
                      return 'К';
                    case idName.reports:
                      return 'О';
                    default:
                      return false;
                  }
                }
                return false;
              }
            }
            trigger={(
              <Menu.Item
                id={id}
                className="main-navbar__item"
                as={NavLink}
                to={path}
                key={path}
              >
                {title}
              </Menu.Item>
            )}
          />
        )
      })}
      {dropLinks.length !== 0 && (
        <Popup
          open={isShowF2Hint}
          size="mini"
          position="bottom center"
          content="Ё"
          trigger={(
            <Dropdown
              id={idName.more}
              className="main-navbar__item"
              item
              text="Ещё..."
              // options={dropLinks}
            >
              <Dropdown.Menu>
                {dropLinks.map((item) => {
                  if (item.props.trigger.props.children === 'Справочники') {
                    return (
                      <Dropdown.Item
                        className="main-navbar__item__dropdown"
                      >
                        <Dropdown
                          className="navbar__directories"
                          id={item.props.trigger.props.id}
                          text={item.props.trigger.props.children}
                        >
                          <Dropdown.Menu>
                            {item.props.trigger.props.to.map((link) => {
                              return (
                                <Dropdown.Item
                                  className="main-navbar__item__dropdown"
                                  as={NavLink}
                                  to={link.path}
                                  key={link.path}
                                  text={link.title}
                                />
                              )
                            })}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Dropdown.Item>
                    )
                  }
                  return (
                    <Dropdown.Item
                      className="main-navbar__item__dropdown"
                      as={NavLink}
                      to={item.key}
                      key={item.key}
                      text={item.props.trigger.props.children}
                    />
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>
          )}
        />
      )}
      { isShowF2Hint ? <GlobalHotKeys keyMap={keyMapF2} handlers={handlersF2} /> : null }
      <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
    </>
  );
}

NavigateLinkGroup.defaultProps = {
  navlinks: PropTypes.array,
  isShowF1Hint: false,
  isShowF2Hint: false,
};

NavigateLinkGroup.propTypes = {
  navlinks: PropTypes.array,
  isShowF1Hint: PropTypes.bool,
  isShowF2Hint: PropTypes.bool,
};

export default NavigateLinkGroup;
