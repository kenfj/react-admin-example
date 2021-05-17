import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Title } from 'react-admin';

const Dashboard = () => (
  <Card>
    <Title title="Home Title" />
    <CardContent>
      <Typography variant="h6">Home Message</Typography>
    </CardContent>
  </Card>
)

export default Dashboard;
