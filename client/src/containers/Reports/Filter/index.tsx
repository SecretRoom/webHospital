import React, { ReactElement, SyntheticEvent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'
import ReportsFilter from '../../../components/Reports/Filter'
import { fetchReportA } from '../actions'
import { isFetchingReportsS } from '../selectors'
import getStore from '../../../services/IndexedDB/getStore'
import { fetchPatientsA } from '../../Patients/actions'
import { patientsListS } from '../../Patients/selectors'

type ReportsFilterContainerProps = {
  isFetching: boolean

  fetchReport: (date: {
    dateTo: Date,
    dateFor: Date,
  }) => void

  [key: string]: any
}

const ReportsFilterContainer = ({
  isFetching,

  fetchReport,
}: ReportsFilterContainerProps): ReactElement => {
  const [date, setDate] = useState<Date>(new Date())

  const handleChangeDate = (date: Date): void => setDate(date)

  const handleResetFilter = (): void => {
    handleChangeDate(new Date())
  }

  useEffect(() => {
    // fetchReports(date)
  }, [date])

  return (
    <ReportsFilter
      // date={date}
      isFetching={isFetching}
      handleChangeDate={handleChangeDate}
      handleResetFilter={handleResetFilter}
    />
  )
}

export default connect(
  (state): RootStateInterface => ({
    isFetching: isFetchingReportsS(state),
  }),
  {
    fetchReport: fetchReportA.request,
  },
)(ReportsFilterContainer)
