import React, { ReactElement, SyntheticEvent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'
import { useHistory } from 'react-router'
import { Icon, Menu, Tab } from 'semantic-ui-react'
import moment from 'moment'
import AllergistExam from '../../../../components/Patient/Examinations/AllergistExam'
import { dataExamS, isFetchingExamS } from '../selectors'
import { updateExamA } from '../actions'
import getStore from '../../../../services/IndexedDB/getStore'
import { idEmplS } from '../../../UserService/selectors'

type AllergistExamContainerProps = {
  idEmpl: string

  isFetching: boolean

  dataExam: any

  updateExam: (data: any) => void
}

const AllergistExamContainer = ({
  idEmpl,
  dataExam,
  isFetching,

  updateExam,
}: AllergistExamContainerProps): ReactElement => {
  const [anamnesis, setAnamnesis] = useState<string>('')
  const [complaints, setComplaints] = useState<string>('')
  const [conclusion, setConclusion] = useState<string>('')
  const [recommendations, setRecommendations] = useState<string>('')

  const [isAddTicketModal, setIsAddTicketModal] = useState<boolean>(false)

  const [staff, setStaff] = useState<any>([])
  const [staffFull, setStaffFull] = useState<any>([])
  const [tickets, setTickets] = useState<any>([])

  const [newTicket, setNewTicket] = useState<{ idEmpl: string, text: string }>({ idEmpl: '', text: '' })

  const handleChangeTicketModal = (): void => setIsAddTicketModal(prev => !prev)

  const handleChangeInputs = (e: SyntheticEvent, field: string, value: any): void => {
    switch (field) {
      case 'anamnesis':
        setAnamnesis(value)
        break
      case 'complaints':
        setComplaints(value)
        break
      case 'conclusion':
        setConclusion(value)
        break
      case 'recommendations':
        setRecommendations(value)
        break
      default:
        break;
    }
  }

  const handleUpdateExam = (): void => {
    const obj = R.whereEq(dataExam)
    if (!obj({
      ...dataExam,
      anamnesis,
      complaints,
      conclusion,
      recommendations,
    })) {
      updateExam({
        anamnesis,
        complaints,
        conclusion,
        recommendations,
      })
    }
  }

  const handleChangeNewTicket = (e: SyntheticEvent, fieldName: string, value: string): void => {
    setNewTicket({
      ...newTicket,
      [fieldName]: value,
    })
  }

  const handleCreateNewTicket = (): void => {
    updateExam({
      tickets: R.append({
        text: newTicket.text,
        idEmpl: newTicket.idEmpl,
        idEmplRef: idEmpl,
        dateCreate: new Date(),
      }, tickets),
    })
    handleChangeTicketModal()
  }
  const createTicket = (ticket: any): any => {
    let findEmpl: any
    let newFio: any
    if (!R.isEmpty(staffFull)) {
      findEmpl = JSON.parse(JSON.stringify(R.find(R.propEq('idEmpl', ticket.idEmpl))(staffFull)))
      if (!R.isNil(findEmpl)) {
        newFio = findEmpl.fioEmpl.match(/[a-zа-я]+/gi)
        switch (newFio?.length) {
          case 1:
            newFio = newFio[0]
            break
          case 2:
            newFio = `${newFio[0]} ${newFio[1][0]}.`
            break
          case 3:
            newFio = `${newFio[0]} ${newFio[1][0]}. ${newFio[2][0]}.`
            break
          default:
            break;
        }
      }
    }
    return ({
      menuItem: (
        <Menu.Item key={Math.random()} className="ticket-menuItem">
          <span>{findEmpl?.deptName}</span>
        </Menu.Item>
      ),
      // eslint-disable-next-line react/display-name
      render: () => (
        <Tab.Pane className="ticket-tabPane">
          <span>Специалист: {newFio}</span>
          <span>Профиль: {findEmpl?.profName}</span>
          <span>Информация для направления:</span>
          <span>{ticket.text}</span>
        </Tab.Pane>
      ),
    })
  }

  const renderTickets = (tickets: any[]) => R.map(createTicket, tickets)

  useEffect(() => {
    setTickets(R.isNil(dataExam.tickets) ? [] : dataExam.tickets)
    setAnamnesis(R.isNil(dataExam.anamnesis) ? '' : dataExam.anamnesis)
    setComplaints(R.isNil(dataExam.complaints) ? '' : dataExam.complaints)
    setConclusion(R.isNil(dataExam.conclusion) ? '' : dataExam.conclusion)
    setRecommendations(R.isNil(dataExam.recommendations) ? '' : dataExam.recommendations)
  }, [dataExam])

  useEffect(() => {
    setNewTicket({
      idEmpl: '',
      text: '',
    })
  }, [isAddTicketModal])

  useEffect(() => {
    getStore.staff(undefined).then((res) => {
      const list = R.filter((item: any) => !R.identical(item.idEmpl, idEmpl), res)
      setStaffFull(res)
      setStaff(R.map((item) => ({
        key: item.idEmpl,
        value: item.idEmpl,
        text: `${item.fioEmpl} / ${item.profName}`,
      }), list))
    })
  }, [])

  return (
    <AllergistExam
      staff={staff}
      tickets={tickets}
      anamnesis={anamnesis}
      newTicket={newTicket}
      isFetching={isFetching}
      complaints={complaints}
      conclusion={conclusion}
      renderTickets={renderTickets}
      recommendations={recommendations}
      isAddTicketModal={isAddTicketModal}
      handleUpdateExam={handleUpdateExam}
      handleChangeInputs={handleChangeInputs}
      handleChangeNewTicket={handleChangeNewTicket}
      handleCreateNewTicket={handleCreateNewTicket}
      handleChangeTicketModal={handleChangeTicketModal}
    />
  )
}

export default connect(
  (state) => ({
    idEmpl: idEmplS(state),
    dataExam: dataExamS(state),
    isFetching: isFetchingExamS(state),
  }),
  {
    updateExam: updateExamA.request,
  },
)(AllergistExamContainer)
