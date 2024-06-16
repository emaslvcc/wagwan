import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';

import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import { EES } from '@/components/dashboard/overview/ees';
import { ENPS } from '@/components/dashboard/overview/enps';
import { ESAT } from '@/components/dashboard/overview/esat';
import Feedback from '@/components/dashboard/overview/feedback';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';
import { Traffic } from '@/components/dashboard/overview/traffic';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={6} xs={12}>
        <ENPS chartSeries={[
          { name: 'Passives', data: [35, 30, 25, 30, 25, 20] }, 
          { name: 'Promoters', data: [25, 20, 30, 35, 40, 45] }, 
          { name: 'Detractors', data: [40, 50, 45, 35, 35, 35 ]}
        ]} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={6} xs={12}>
        <ESAT chartSeries={[
          { name: 'Score', data: [75, 67, 80, 77, 59, 42] }]} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={6} xs={12}>
        <EES chartSeries={[{ name: 'Score', data: [68, 80, 72, 71, 68, 75] }]} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={6} xs={12}>
        <Feedback />
      </Grid>
    </Grid>
  );
}
