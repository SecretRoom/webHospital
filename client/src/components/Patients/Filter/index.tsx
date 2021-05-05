import React, { ReactElement, SyntheticEvent } from 'react'
import { Accordion, Button, Dropdown, Icon, Input, Label, Segment } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import InputMask from 'react-input-mask'
import * as R from 'ramda'

import './style.sass'

type PatientsFilterProps = {
  sex: string
  oms: string
  name: string
  email: string
  snils: string
  phone: string
  surname: string
  patronymic: string
  omsCompany: string
  quickSearchValue: string

  birthday: Date | null

  isFetching: boolean
  openFullFilter: boolean

  omsCompanyList: any[]

  handleUpdateList: () => void
  handleResetFilter: () => void
  handleChangeFullFilter: () => void
  handleQuickSearch: (e: SyntheticEvent, data: any) => void
  handleChangeInputs: (e: SyntheticEvent, field: string, { value }: any) => void
}

const PatientsFilter = ({
  oms,
  sex,
  name,
  email,
  snils,
  phone,
  surname,
  birthday,
  patronymic,
  omsCompany,
  isFetching,
  openFullFilter,
  omsCompanyList,
  quickSearchValue,

  handleUpdateList,
  handleQuickSearch,
  handleResetFilter,
  handleChangeInputs,
  handleChangeFullFilter,
}: PatientsFilterProps): ReactElement => {
  return (
    <Accordion className="patients-filter">
      <Accordion.Title
        className="patients-filter__quick"
        index={0}
        as={Segment}
        onClick={(e: SyntheticEvent): void => e.preventDefault()}
      >
        <div className="find-patient">
          <h4>
            Поиск по ФИО / ОМС
          </h4>
          <Input
            transparent
            disabled={isFetching || openFullFilter}
            icon={{
              name: 'close',
              color: 'grey',
              link: true,
              onClick: (e: SyntheticEvent) => handleQuickSearch(e as never, { value: '' }),
            }}
            value={quickSearchValue}
            onChange={(e: SyntheticEvent, data: any): void => handleQuickSearch(e as never, data)}
            placeholder="Поиск..."
          />
        </div>
        <Icon
          link
          color="grey"
          size="large"
          name="filter"
          title="Расширенный фильтр"
          flipped={openFullFilter ? 'vertically' : undefined}
          onClick={(): void => handleChangeFullFilter()}
        />
        <Icon
          link
          color="grey"
          size="large"
          loading={isFetching}
          disabled={isFetching}
          name="sync alternate"
          title="Обновить список"
          onClick={(): void => handleUpdateList()}
        />
        <Icon
          link
          color="grey"
          size="large"
          disabled={isFetching}
          name="undo alternate"
          title="Сброс фильтрации"
          onClick={(): void => handleResetFilter()}
        />
      </Accordion.Title>
      <Accordion.Content
        index={0}
        className="patients-filter__full"
        as={Segment}
        active={openFullFilter}
      >
        <div className="fields">
          <div className={R.isEmpty(surname) ? 'field-empty' : 'field'}>
            {!R.isEmpty(surname) && <span>Фамилия</span>}
            <Input
              transparent
              value={surname}
              placeholder="Фамилия"
              disabled={isFetching}
              icon={!R.isEmpty(surname) && {
                name: 'close',
                color: 'grey',
                link: true,
                onClick: (e: SyntheticEvent) => handleChangeInputs(e as never, 'surname', ''),
              }}
              onChange={(e: SyntheticEvent, { value }: any): void => handleChangeInputs(e as never, 'surname', value)}
            />
          </div>
          <div className={R.isEmpty(name) ? 'field-empty' : 'field'}>
            {!R.isEmpty(name) && <span>Имя</span>}
            <Input
              value={name}
              transparent
              disabled={isFetching}
              icon={!R.isEmpty(name) && {
                name: 'close',
                color: 'grey',
                link: true,
                onClick: (e: SyntheticEvent) => handleChangeInputs(e as never, 'name', ''),
              }}
              placeholder="Имя"
              onChange={(e: SyntheticEvent, { value }: any): void => handleChangeInputs(e as never, 'name', value)}
            />
          </div>
          <div className={R.isEmpty(patronymic) ? 'field-empty' : 'field'}>
            {!R.isEmpty(patronymic) && <span>Отчество</span>}
            <Input
              value={patronymic}
              transparent
              placeholder="Отчество"
              disabled={isFetching}
              icon={!R.isEmpty(patronymic) && {
                name: 'close',
                color: 'grey',
                link: true,
                onClick: (e: SyntheticEvent) => handleChangeInputs(e as never, 'patronymic', ''),
              }}
              onChange={(e: SyntheticEvent, { value }: any): void => handleChangeInputs(e as never, 'patronymic', value)}
            />
          </div>
        </div>
        <div className="fields">
          <div className={R.isEmpty(email) ? 'field-empty' : 'field'}>
            {!R.isEmpty(email) && <span>Email</span>}
            <Input
              transparent
              value={email}
              placeholder="Email"
              disabled={isFetching}
              icon={!R.isEmpty(email) && {
                name: 'close',
                color: 'grey',
                link: true,
                onClick: (e: SyntheticEvent) => handleChangeInputs(e as never, 'email', ''),
              }}
              onChange={(e: SyntheticEvent, { value }: any): void => handleChangeInputs(e as never, 'email', value)}
            />
          </div>
          <div className={R.isEmpty(phone) ? 'field-empty' : 'field'}>
            {!R.isEmpty(phone) && <span>Номер</span>}
            <Input
              transparent
              value={phone}
              placeholder="Номер"
              disabled={isFetching}
              onChange={(e: SyntheticEvent, { value }: any) => handleChangeInputs(e as never, 'phone', value)}
            />
          </div>
          <div className={R.isEmpty(snils) ? 'field-empty' : 'field'}>
            {!R.isEmpty(snils) && <span>СНИЛС</span>}
            <Input
              transparent
              value={snils}
              placeholder="СНИЛС"
              disabled={isFetching}
              onChange={(e: SyntheticEvent, { value }: any) => handleChangeInputs(e as never, 'snils', value)}
            />
          </div>
          <div className={R.isEmpty(oms) ? 'field-empty' : 'field'}>
            {!R.isEmpty(oms) && <span>ОМС</span>}
            <Input
              transparent
              value={oms}
              placeholder="ОМС"
              disabled={isFetching}
              onChange={(e: SyntheticEvent, { value }: any) => handleChangeInputs(e as never, 'oms', value)}
            />
          </div>
        </div>
        <div className="fields-any">
          <div className={R.isNil(birthday) ? 'field-empty' : 'field'}>
            {!R.isNil(birthday) && <span>Дата рождения</span>}
            <DatePicker
              isClearable
              disabled={isFetching}
              closeOnScroll
              selected={birthday}
              maxDate={new Date()}
              customInput={(
                <Input
                  transparent
                />
              )}
              dateFormat="dd.MM.yyyy"
              placeholderText="Дата рождения"
              onChange={(date: any, e: SyntheticEvent): void => handleChangeInputs(e as never, 'birthday', date)}
            />
          </div>
          <div className={R.isEmpty(omsCompany) ? 'field-empty' : 'field'}>
            {!R.isEmpty(omsCompany) && <span>Страховая компания</span>}
            <Dropdown
              basic
              clearable
              value={omsCompany}
              selectOnBlur={false}
              options={omsCompanyList}
              placeholder="Страховая компания"
              selectOnNavigation={false}
              onChange={(e: SyntheticEvent, { value }: any) => handleChangeInputs(e as never, 'omsCompany', value)}
            />
          </div>
          <div className={R.isEmpty(sex) ? 'field-empty' : 'field'}>
            {!R.isEmpty(sex) && <span>Пол</span>}
            <Dropdown
              basic
              clearable
              value={sex}
              placeholder="Пол"
              selectOnBlur={false}
              selectOnNavigation={false}
              onChange={(e: SyntheticEvent, { value }: any) => handleChangeInputs(e as never, 'sex', value)}
              options={[
                { key: 'м', value: 'м', text: 'мужской' },
                { key: 'ж', value: 'ж', text: 'женский' },
              ]}
            />
          </div>
          <Button
            primary
            size="small"
            content="Поиск пациентов"
            onClick={(): void => handleUpdateList()}
          />
          <Button
            primary
            size="small"
            content="Сброс фильтра"
            onClick={(): void => handleResetFilter()}
          />
        </div>
      </Accordion.Content>
    </Accordion>
  )
}
export default PatientsFilter
