import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IRequest from 'interfaces/models/requests';

import React, { memo } from 'react';

interface IProps {
  request: IRequest;
}

const ListItem = memo((props: IProps) => {
  const { request } = props;

  return (
    <TableRow>
      <TableCell>{request.description}</TableCell>
      <TableCell>{request.qtd}</TableCell>
      <TableCell>{request.price}</TableCell>
    </TableRow>
  );
});

export default ListItem;
