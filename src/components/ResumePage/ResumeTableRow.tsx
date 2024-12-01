import { TableRow, TableCell, SxProps, Theme, Typography } from '@mui/material';
import { textDefaultStyles } from '../../styles/texts';
import { ReactElement } from 'react';

type ResumeTableRowProps = {
  rowTitle: string;
  rowValue: string | ReactElement;
};

export const ResumeTableRow = (props: ResumeTableRowProps) => {
  const { rowTitle, rowValue } = props;

  const tableCellText: SxProps<Theme> = { fontWeight: 'bold', color: '#333' };

  return (
    <TableRow>
      <TableCell sx={tableCellText}>{rowTitle}</TableCell>
      <TableCell>
        {
          <Typography variant="body1" sx={textDefaultStyles}>
            {rowValue}
          </Typography>
        }
      </TableCell>
    </TableRow>
  );
};
