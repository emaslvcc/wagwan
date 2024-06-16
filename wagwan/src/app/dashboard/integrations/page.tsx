'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { alpha, useTheme } from '@mui/material/styles';
import type { SxProps } from '@mui/material/styles';
import { ArrowClockwise as ArrowClockwiseIcon } from '@phosphor-icons/react/dist/ssr/ArrowClockwise';
import { ArrowRight as ArrowRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import type { ApexOptions } from 'apexcharts';
import { Stack, Typography } from '@mui/material';

import { Chart } from '@/components/core/chart';

export interface Integrations {
  chartSeries: { name: string; type?: string; data: { x: number; y: number }[] }[];
  sx?: SxProps;
}

export function Prediction({ chartSeries, sx }: Integrations): React.JSX.Element {
  const chartOptions = useChartOptions();

  return (
    <Card sx={sx}>
      <CardContent>
        <Chart height={350} options={chartOptions} series={chartSeries} type="line" width="100%" />
      </CardContent>
      <Divider />
    </Card>
  );
}

function useChartOptions(): ApexOptions {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent',
      toolbar: { show: false },
      type: 'scatter',
    },
    colors: ['#00008B', 'rgba(255, 87, 51, 0.5)'],
    dataLabels: { enabled: false },
    fill: { opacity: 1 },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    legend: { show: true, position: 'top', horizontalAlign: 'right' },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    theme: { mode: theme.palette.mode },
    xaxis: {
      axisBorder: { color: theme.palette.divider, show: true },
      axisTicks: { color: theme.palette.divider, show: true },
      labels: { offsetY: 5, style: { colors: theme.palette.text.secondary } },
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        formatter: (value) => `${value}`,
        offsetX: -10,
        style: { colors: theme.palette.text.secondary },
      },
    },
  };
}

const mockData = [
  {
    name: 'Employee Turnover',
    type: 'scatter',
    data: [
      { x: 1, y: 65 },
      { x: 2, y: 59 },
      { x: 3, y: 80 },
      { x: 4, y: 81 },
      { x: 5, y: 56 },
      { x: 6, y: 55 },
      { x: 7, y: 40 },
    ],
  },
  {
    name: 'Regression Line',
    type: 'line',
    data: [
      { x: 1, y: 50 },
      { x: 2, y: 55 },
      { x: 3, y: 60 },
      { x: 4, y: 65 },
      { x: 5, y: 70 },
      { x: 6, y: 75 },
      { x: 7, y: 80 },
    ],
  },
];

export default function Page(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Prediction Model</Typography>
          <Prediction chartSeries={mockData} sx={{ m: 2 }} />
        </Stack>
      </Stack>
    </Stack>
  );
}
