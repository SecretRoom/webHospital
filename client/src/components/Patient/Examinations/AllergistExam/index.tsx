import React, { ReactElement, SyntheticEvent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'
import { useHistory } from 'react-router'
import {
  Button,
  Dropdown,
  Icon,
  Input,
  Menu,
  Modal,
  Segment,
  Tab,
  TextArea,
} from 'semantic-ui-react'
import './style.sass'

type AllergistExamProps = {
  anamnesis: string
  complaints: string
  conclusion: string
  recommendations: string

  newTicket: { idEmpl: string, text: string }

  isAddTicketModal: boolean
  isFetching: boolean

  staff: any[]
  tickets: any[]

  handleUpdateExam: () => void
  handleCreateNewTicket: () => void
  handleChangeTicketModal: () => void
  renderTickets: (tickets: any[]) => any
  handleChangeInputs: (e: SyntheticEvent, field: string, value: any) => void
  handleChangeNewTicket: (e: SyntheticEvent, fieldName: string, value: any) => void
}

const AllergistExam = ({
  staff,
  tickets,
  anamnesis,
  newTicket,
  complaints,
  isFetching,
  conclusion,
  recommendations,
  isAddTicketModal,

  renderTickets,
  handleUpdateExam,
  handleChangeInputs,
  handleCreateNewTicket,
  handleChangeNewTicket,
  handleChangeTicketModal,
}: AllergistExamProps): ReactElement => {
  return (
    <Segment
      className="allergist-exam__content"
      onMouseLeave={() => handleUpdateExam()}
    >
      <div className={R.isEmpty(anamnesis) ? 'field-empty' : 'field'}>
        {!R.isEmpty(anamnesis) && <span>Анамнез</span>}
        <Input
          transparent
          fluid
          value={anamnesis}
          placeholder="Анамнез"
          disabled={isFetching}
          icon={!R.isEmpty(anamnesis) && {
            name: 'close',
            color: 'grey',
            link: true,
            onClick: (e: SyntheticEvent) => handleChangeInputs(e as never, 'anamnesis', ''),
          }}
          onChange={(e: SyntheticEvent, { value }: any) => handleChangeInputs(e as never, 'anamnesis', value)}
        />
      </div>
      <div className={R.isEmpty(complaints) ? 'field-empty' : 'field'}>
        {!R.isEmpty(complaints) && <span>Жалобы</span>}
        <Input
          transparent
          fluid
          value={complaints}
          placeholder="Жалобы"
          disabled={isFetching}
          icon={!R.isEmpty(complaints) && {
            name: 'close',
            color: 'grey',
            link: true,
            onClick: (e: SyntheticEvent) => handleChangeInputs(e as never, 'complaints', ''),
          }}
          onChange={(e: SyntheticEvent, { value }: any) => handleChangeInputs(e as never, 'complaints', value)}
        />
      </div>
      <div className={R.isEmpty(recommendations) ? 'field-empty' : 'field'}>
        {!R.isEmpty(recommendations) && <span>Рекомендации</span>}
        <Input
          transparent
          fluid
          disabled={isFetching}
          value={recommendations}
          placeholder="Рекомендации"
          icon={!R.isEmpty(recommendations) && {
            name: 'close',
            color: 'grey',
            link: true,
            onClick: (e: SyntheticEvent) => handleChangeInputs(e as never, 'recommendations', ''),
          }}
          onChange={(e: SyntheticEvent, { value }: any) => handleChangeInputs(e as never, 'recommendations', value)}
        />
      </div>
      <div className={R.isEmpty(conclusion) ? 'field-empty' : 'field'}>
        {!R.isEmpty(conclusion) && <span>Заключение</span>}
        <Input
          transparent
          fluid
          value={conclusion}
          disabled={isFetching}
          placeholder="Заключение"
          icon={!R.isEmpty(conclusion) && {
            name: 'close',
            color: 'grey',
            link: true,
            onClick: (e: SyntheticEvent) => handleChangeInputs(e as never, 'conclusion', ''),
          }}
          onChange={(e: SyntheticEvent, { value }: any) => handleChangeInputs(e as never, 'conclusion', value)}
        />
      </div>
      <div className="tickets">
        <div className="tickets__header">
          <span>Направления к другим специалистам</span>
          <Modal
            size="mini"
            className="tickets__header-modal"
            trigger={(
              <Button
                basic
                icon="plus"
                color="green"
                content="Создать новое"
                onClick={() => handleChangeTicketModal()}
              />
            )}
            open={isAddTicketModal}
            onClose={() => handleChangeTicketModal()}
          >
            <Modal.Header className="tickets__header-modal__header">
              Создание направления
            </Modal.Header>
            <Modal.Content className="tickets__header-modal__content">
              <Dropdown
                fluid
                search
                selection
                options={staff}
                selectOnBlur={false}
                value={newTicket.idEmpl}
                placeholder="Специалист"
                className="diagnoses-drop"
                selectOnNavigation={false}
                noResultsMessage="Специалист не найден"
                onChange={(e: SyntheticEvent, { value }: any): void => handleChangeNewTicket(e as never, 'idEmpl', value)}
              />
              <TextArea
                value={newTicket.text}
                className="newTicket-textarea"
                placeholder="Информация для направления"
                onChange={(e: SyntheticEvent, { value }: any): void => handleChangeNewTicket(e as never, 'text', value)}
              />
            </Modal.Content>
            <Modal.Actions>
              <Button
                color="green"
                content="Создать"
                onClick={(): void => handleCreateNewTicket()}
              />
            </Modal.Actions>
          </Modal>
        </div>
        <Tab
          className="tickets__content"
          panes={renderTickets(tickets)}
          menu={{ vertical: true, secondary: true, pointing: true }}
        />
      </div>
    </Segment>
  )
}

export default AllergistExam
