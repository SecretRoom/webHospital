import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import ReportsContent from '../../../components/Reports/Content'
import { isFetchingReportsS } from '../selectors'

type ReportsContentContainerProps = {
  isFetching: boolean
}

const ReportsContentContainer = ({
  isFetching,
}: ReportsContentContainerProps): ReactElement => {
  return (
    <ReportsContent
      isFetching={isFetching}
    />
  )
}

export default connect(
  (state) => ({
    isFetching: isFetchingReportsS(state),
  }),
  {},
)(ReportsContentContainer)
