import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';

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
    <Grid lg={6} xs={12}>
          <ESAT chartSeries={[
            { name: 'Score', data: [75, 67, 80, 77, 59, 42] }]} sx={{ height: '100%' }} />
      </Grid>
  );
}
