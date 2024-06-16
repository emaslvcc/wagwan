import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(topic: string, significance: number) {
  return { topic, significance };
}

const rows = [
  createData('More open communication', 80),
  createData('Healthier lunch', 50),
  createData('More comfortable chairs', 40),
  createData('More cigarette breaks', 30),
  createData('Better water filter', 20),
  createData('Standing desks', 10),
  createData('Bigger vending machine', 5),
];

export default function Feedback() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Feedback</TableCell>
            <TableCell align="right">Significance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.topic} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.topic}
              </TableCell>
              <TableCell align="right">{row.significance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
