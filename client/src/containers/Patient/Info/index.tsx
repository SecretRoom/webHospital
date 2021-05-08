import React, { ReactElement, SyntheticEvent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'
import moment from 'moment'
import PatientInfo from '../../../components/Patient/Info'
import getStore from '../../../services/IndexedDB/getStore'
import { idPatS, isFetchingPatientS, patientInfoS } from '../selectors'
import { updatePatientA } from '../actions'

type PatientInfoContainerProps = {
  idPat: string

  isFetching: boolean

  patientInfo: any

  updatePatient: (newData: any) => void
}

const PatientInfoContainer = ({
  idPat,
  isFetching,
  patientInfo,

  updatePatient,
}: PatientInfoContainerProps): ReactElement => {
  const [oms, setOms] = useState<string>('')
  const [sex, setSex] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [snils, setSnils] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [omsCompany, setOmsCompany] = useState<string>('')
  const [patronymic, setPatronymic] = useState<string>('')

  const [birthday, setBirthday] = useState<Date | null>(null)

  const [isError, setIsError] = useState<boolean>(false)
  const [isIdent, setIsIdent] = useState<boolean>(false)
  const [isDisInput, setIsDisInput] = useState<boolean>(true)

  const [omsCompanyList, setOmsCompanyList] = useState<any[]>([])

  const handleChangeInputs = (e: SyntheticEvent, field: string, value: any): void => {
    switch (field) {
      case 'sex':
        setSex(value)
        break
      case 'oms':
        setOms(prev => (R.test(/\D/, value) ? prev : R.slice(0, 16, value)))
        break
      case 'name':
        setName(prev => (R.test(/[^a-zа-я]+/gi, value) ? prev : value))
        break
      case 'email':
        setEmail(value)
        break
      case 'snils':
        setSnils(prev => (R.test(/\D/, value) ? prev : R.slice(0, 11, value)))
        break
      case 'phone':
        setPhone(prev => (R.test(/\D/, value) ? prev : R.slice(0, 11, value)))
        break
      case 'surname':
        setSurname(prev => (R.test(/[^a-zа-я]+/gi, value) ? prev : value))
        break
      case 'patronymic':
        setPatronymic(prev => (R.test(/[^a-zа-я]+/gi, value) ? prev : value))
        break
      case 'omsCompany':
        setOmsCompany(value)
        break
      case 'birthday':
        setBirthday(value)
        break
      default:
        break;
    }
  }

  const handleClickEdit = (): void => setIsDisInput(prev => !prev)

  const handleClickSave = (): void => {
    updatePatient({
      oms,
      sex,
      name,
      phone,
      email,
      snils,
      surname,
      omsCompany,
      patronymic,
      birthday: moment(birthday).format('YYYY.MM.DD'),
    })
    setIsDisInput(prev => !prev)
  }

  const handleClickReset = (): void => {
    setOms(patientInfo.oms)
    setSex(patientInfo.sex)
    setName(patientInfo.name)
    setPhone(patientInfo.phone)
    setEmail(patientInfo.email)
    setSnils(patientInfo.snils)
    setSurname(patientInfo.surname)
    setOmsCompany(patientInfo.omsCompany)
    setPatronymic(patientInfo.patronymic)
    setBirthday(new Date(patientInfo.birthday) || new Date())
  }

  const handleClickCancel = (): void => {
    handleClickReset()
    setIsDisInput(prev => !prev)
  }

  useEffect(() => {
    if (!R.isEmpty(patientInfo) && !R.isNil(patientInfo)) {
      setOms(patientInfo.oms)
      setSex(patientInfo.sex)
      setName(patientInfo.name)
      setPhone(patientInfo.phone)
      setEmail(patientInfo.email)
      setSnils(patientInfo.snils)
      setSurname(patientInfo.surname)
      setOmsCompany(patientInfo.omsCompany)
      setPatronymic(patientInfo.patronymic)
      if (!R.isEmpty(patientInfo.birthday)) setBirthday(new Date(patientInfo.birthday))
    }
  }, [patientInfo])

  useEffect(() => {
    const propIdent = (): boolean => {
      const obj = R.whereEq(patientInfo)
      return obj({
        oms,
        sex,
        name,
        phone,
        idPat,
        email,
        snils,
        surname,
        omsCompany,
        patronymic,
        birthday: R.isNil(birthday) ? '' : moment(birthday).format('YYYY.MM.DD'),
      })
    }
    if (
      R.isEmpty(oms)
      || R.isEmpty(name)
      || R.isEmpty(phone)
      || R.isEmpty(email)
      || R.isEmpty(snils)
      || R.isEmpty(surname)
      || R.isEmpty(patronymic)
      || oms.length < 16
      || phone.length < 11
      || snils.length < 11
      || R.isNil(email.match(/\w+@[a-z]+\.[a-z]+/i))
    ) {
      setIsError(true)
    } else setIsError(false)
    setIsIdent(propIdent())
  }, [
    oms,
    sex,
    name,
    phone,
    idPat,
    email,
    snils,
    surname,
    omsCompany,
    patronymic,
    birthday,
  ])

  useEffect(() => {
    getStore.omsCopanies(undefined).then((res) => {
      setOmsCompanyList(R.map(
        (item: any): any => ({
          key: item.id,
          text: item.name,
          value: item.id,
        }),
        res,
      ))
    })
  }, [])

  return (
    <PatientInfo
      oms={oms}
      sex={sex}
      name={name}
      email={email}
      snils={snils}
      phone={phone}
      isIdent={isIdent}
      surname={surname}
      isError={isError}
      birthday={birthday}
      isDisInput={isDisInput}
      patronymic={patronymic}
      omsCompany={omsCompany}
      isFetching={isFetching}
      omsCompanyList={omsCompanyList}
      handleClickSave={handleClickSave}
      handleClickEdit={handleClickEdit}
      handleClickReset={handleClickReset}
      handleClickCancel={handleClickCancel}
      handleChangeInputs={handleChangeInputs}
    />
  )
}

export default connect(
  (state) => ({
    idPat: idPatS(state),
    patientInfo: patientInfoS(state),
    isFetching: isFetchingPatientS(state),
  }),
  {
    updatePatient: updatePatientA.request,
  },
)(PatientInfoContainer)
