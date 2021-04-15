import { connect } from 'react-redux';

import PrivateRoute from '../../HOC/PrivateRoute';

export default connect(
  (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  }),
  null,
)(PrivateRoute);
