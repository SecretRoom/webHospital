import React, { ReactElement, SyntheticEvent } from 'react'
import { Button, Icon, Loader, Menu, Modal, Segment, Sidebar } from 'semantic-ui-react'

import './style.sass'

type PatientsExaminationsProps = {
  isFetching: boolean
  openPortal: boolean
  hiddenSidebar: boolean

  examList: any[]

  handleChangeHidden: () => void
  handleChangeOpenPortal: () => void
  createExamTypeList: () => ReactElement[]
  createMenuItem: (list: any[]) => ReactElement
}

const PatientsExaminations = ({
  examList,
  isFetching,
  openPortal,
  hiddenSidebar,
  createMenuItem,
  handleChangeHidden,
  createExamTypeList,
  handleChangeOpenPortal,
}: PatientsExaminationsProps): ReactElement => (
  <>
    {isFetching ? (
      <div className="loader-patientsExaminations">
        <Loader active size="huge" inline="centered" />
      </div>
    ) : (
      <Sidebar.Pushable
        as={Segment}
        className="patient-content"
      >
        <Sidebar
          vertical
          as={Menu}
          width="wide"
          icon="labeled"
          className="patient-content__sidebar"
          direction="right"
          animation="overlay"
          visible={!hiddenSidebar}
        >
          {createMenuItem(examList)}
        </Sidebar>
        <Sidebar.Pusher
          onClick={(): void | null => (!hiddenSidebar ? handleChangeHidden() : (null))}
        >
          {hiddenSidebar && (
            <Icon
              link
              bordered
              inverted
              size="big"
              name="list"
              color="green"
              onClick={(): void => handleChangeHidden()}
              className="patient-content__sidebar-trigger"
            />
          )}
          <Segment
            basic
            className="patient-content__content"
          >
            Examination
            <Modal
              size="mini"
              open={openPortal}
              className="patient-content__content-modal"
              onClick={(e: SyntheticEvent) => e.stopPropagation()}
              onClose={(e: SyntheticEvent): void => {
                e.stopPropagation()
                handleChangeOpenPortal()
              }}
            >
              <Modal.Header
                content="Выбор типа осмотра"
                className="patient-content__content-modal__header"
              />
              <Modal.Content
                content={(
                  <Menu
                    vertical
                  // secondary
                  >
                    {createExamTypeList()}
                  </Menu>
                )}
                className="patient-content__content-modal__content"

              />
            </Modal>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )}
  </>
)

export default PatientsExaminations
