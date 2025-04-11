import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    api.get('/applications').then((response) => {
      setApplications(response.data);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Заявки
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>ФИО</TableCell>
            <TableCell>Статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applications.map((app) => (
            <TableRow key={app.id}>
              <TableCell>{app.id}</TableCell>
              <TableCell>{app.fullName}</TableCell>
              <TableCell>{app.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default Applications;