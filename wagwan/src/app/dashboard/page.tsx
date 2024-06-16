import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

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
        <ENPS chartSeries={[{ name: 'Average', data: [7, 9, 7, 8, 8, 5, 6, 8, 7, 6, 9, 8] }]} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={6} xs={12}>
        <ESAT
          chartSeries={[{ name: 'Average', data: [55, 65, 75, 81, 72, 83, 69, 72, 90, 85, 71, 71] }]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={6} xs={12}>
        <EES chartSeries={[{ name: 'Average', data: [3, 4, 5, 6, 5, 5, 6, 6, 7, 6, 7, 6] }]} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={6} xs={12}>
        <Feedback />
      </Grid>
    </Grid>
  );
}
