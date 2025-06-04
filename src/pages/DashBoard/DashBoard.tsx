import PageHeader from '~/components/PageHeader'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { mockStats } from '~/constants/mock-data'
import StatsCard from '~/pages/DashBoard/components/StatsCard'
import HighlightedCard from '~/pages/DashBoard/components/HighlightedCard'
import SessionsChart from '~/pages/DashBoard/components/SessionsChart'
import PageViewsBarChart from '~/pages/DashBoard/components/PageViewsBarChart'
import CustomTreeView from '~/pages/DashBoard/components/CustomTreeView'
import ChartUserByCountry from '~/pages/DashBoard/components/ChartUserByCountry'

const breadcrumbs = [{ name: 'Dashboard', href: '/dashboard' }]

export default function DashBoard() {
  return (
    <>
      <PageHeader heading='Dashboard' breadcrumbs={breadcrumbs} />
      <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Box
          component='main'
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: alpha(theme.palette.background.default, 1),
            overflow: 'auto'
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 }
            }}
          >
            <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
              <Typography component='h2' variant='h6' sx={{ mb: 2 }}>
                Overview
              </Typography>
              <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }}>
                {mockStats.map((stat, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                    <StatsCard {...stat} />
                  </Grid>
                ))}
                <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                  <HighlightedCard />
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <SessionsChart />
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <PageViewsBarChart />
                </Grid>
              </Grid>
              <Typography component='h2' variant='h6' sx={{ mb: 2 }}>
                Details
              </Typography>
              <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12 }}>
                  <Stack gap={2} direction={{ xs: 'column', md: 'row' }}>
                    <CustomTreeView />
                    <ChartUserByCountry />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
