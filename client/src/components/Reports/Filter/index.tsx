import React, { ReactElement, SyntheticEvent } from 'react'
import { Button, Dropdown, Icon, Input, Modal, Segment } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import * as R from 'ramda'

import './style.sass'
import moment from 'moment';

type ReportsFilterProps = {
  isFetching: boolean

  handleResetFilter: () => void
  handleChangeDate: (date: Date) => void
}

const ReportsFilter = ({
  isFetching,

  handleChangeDate,
  handleResetFilter,
}: ReportsFilterProps): ReactElement => (
  <Segment
    className="reports-filter"
    onClick={(e: SyntheticEvent): void => e.preventDefault()}
  >
    <h4>Дата приема</h4>
    {/* <DatePicker
        closeOnScroll
        selected={date}
        disabled={isFetching}
        customInput={(
          <Button content={moment(date).format('DD.MM.YYYY')} />
        )}
        dateFormat="dd.MM.yyyy"
        onChange={(date: Date): void => handleChangeDate(date)}
      /> */}
  </Segment>
)

export default ReportsFilter
