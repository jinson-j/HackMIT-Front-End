import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';

import { useEffect } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">

        <Typography variant="h4" sx={{ mb: 5 }}>
          Welcome to Volex Dashboard !
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Tasks" total={113} icon={'ant-design:number-outlined'} />


          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Percent Completed On Time" total={"94"} color="info" icon={'ant-design:percentage-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total On Call Employees" total={15} color="warning" icon={'ant-design:usergroup-add-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Urgent Tasks" total={7} color="error" icon={'ant-design:alert-twotone'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Average Tasks Completed Per Hour"
              subheader="(+23%) Overall Improvement"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                
                
              ]}
              chartData={[
                // {
                //   name: 'PCA',
                //   type: 'column',
                //   fill: 'solid',
                //   data: [23, 23, 10, 9, 13, 5, 17, 28, 44, 22, 30],
                // },
                {
                  name: 'PCA Team 1',
                  type: 'area',
                  fill: 'gradient',
                  data: [24, 31, 30, 30, 42, 53, 21, 34, 26, 47, 47],
                },
                {
                  name: 'PCA Team 2',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 44, 42, 49, 36, 36],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Most Requested Equipment"
              chartData={[
                { label: 'Anesthesia Machine', value: 5220 },
                { label: 'Ventilators', value: 4780 },
                { label: 'Defibrillators', value: 4300 },
                { label: 'Imaging Equipment', value: 5700 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Leading PCA's"
              subheader="Leading PCA: Joe R"
              chartData={[
                { label: 'Joe R', value: 540 },
                { label: 'Abby A', value: 533 },
                { label: 'Trevor G', value: 480 },
                { label: 'Eva K', value: 474 },
                { label: 'Samhit K', value: 450 },
                { label: 'Jason N.', value: 444 },
                { label: 'Lauren S.', value: 441 },
                { label: 'Nandan S.', value: 439 },
                { label: 'Mary B.', value: 410 },
                { label: 'Rick R.', value: 380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Most Requested Supply"
              chartData={[
                { label: 'Needles', value: 6220 },
                { label: 'Sanitary', value: 3780 },
                { label: 'Runners', value: 6300 },
                { label: 'Clamps', value: 3700 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
