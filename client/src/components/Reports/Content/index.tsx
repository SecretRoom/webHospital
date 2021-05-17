import React, { ReactElement } from 'react'
import { Loader } from 'semantic-ui-react'

import './style.sass'

type ScheduleAppointmentContentProps = {
  isFetching: boolean
}

const ScheduleAppointmentContent = ({
  isFetching,
}: ScheduleAppointmentContentProps): ReactElement => (
  <>
    {isFetching ? (
      <div className="loader-reportsContent">
        <Loader active size="huge" inline="centered" />
      </div>
    ) : (
      <div className="reports-content" />
    )}
  </>
)

export default ScheduleAppointmentContent
