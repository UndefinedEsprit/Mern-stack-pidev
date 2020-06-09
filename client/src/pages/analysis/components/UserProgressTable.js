import React from 'react';
import PropTypes from '../utils/propTypes';

import { Table, Progress } from 'reactstrap';

import Avatar from './Avatar';

import withBadge from '../hocs/withBadge';

const AvatarWithBadge = withBadge({
  position: 'bottom-right',
  color: 'success',
})(Avatar);

const UserProgressTable = ({ headers, usersData, ...restProps }) => {
  return (
    <Table responsive hover {...restProps}>
      <thead>
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        {usersData.map(({ email, address, age, participation }, index) => (
          <tr key={index}>
            <td className="align-middle text-center">{email}</td>
            <td className="align-middle text-center">{age}</td>
            <td className="align-middle text-center">{address}</td>
            <td className="align-middle text-center">{participation}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

UserProgressTable.propTypes = {
  headers: PropTypes.node,
  usersData: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      address: PropTypes.string,
      age: PropTypes.number,
      participation: PropTypes.number,
    })
  ),
};

UserProgressTable.defaultProps = {
  headers: [],
  usersData: [],
};

export default UserProgressTable;
