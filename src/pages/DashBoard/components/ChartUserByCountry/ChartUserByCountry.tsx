import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { PieChart } from '@mui/x-charts/PieChart'
import { BrazilFlag, GlobeFlag, USAFlag } from '~/components/Icons/Icons'
import { mockUserByCountry } from '~/constants/mock-data'
import PieCenterLabel from '~/pages/DashBoard/components/ChartUserByCountry/PieCenterLabel'

const countries = [
  {
    name: 'USA',
    value: 70,
    flag: <USAFlag />,
    color: 'hsl(220, 25%, 45%)'
  },
  {
    name: 'Brazil',
    value: 20,
    flag: <BrazilFlag />,
    color: 'hsl(220, 25%, 30%)'
  },
  {
    name: 'Other',
    value: 10,
    flag: <GlobeFlag />,
    color: 'hsl(220, 25%, 20%)'
  }
]

export default function ChartUserByCountry() {
  const colors = ['hsl(220, 20%, 65%)', 'hsl(220, 20%, 42%)', 'hsl(220, 20%, 35%)', 'hsl(220, 20%, 25%)']

  return (
    <Card variant='outlined' sx={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
      <CardContent>
        <Typography component='h2' variant='subtitle2'>
          Users by country
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PieChart
            colors={colors}
            margin={{
              left: 80,
              right: 80,
              top: 80,
              bottom: 80
            }}
            series={[
              {
                data: mockUserByCountry,
                innerRadius: 75,
                outerRadius: 100,
                paddingAngle: 0,
                highlightScope: { fade: 'global', highlight: 'item' }
              }
            ]}
            height={260}
            width={260}
            hideLegend
          >
            <PieCenterLabel primaryText='50K' secondaryText='Total' />
          </PieChart>
        </Box>
        {countries.map((country, index) => (
          <Stack key={index} direction='row' sx={{ alignItems: 'center', gap: 2, pb: 2 }}>
            {country.flag}
            <Stack sx={{ gap: 1, flexGrow: 1 }}>
              <Stack
                direction='row'
                sx={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Typography variant='body2' sx={{ fontWeight: '500' }}>
                  {country.name}
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  {country.value}%
                </Typography>
              </Stack>
              <LinearProgress
                variant='determinate'
                aria-label='Number of users by country'
                value={country.value}
                sx={{
                  [`& .${linearProgressClasses.bar}`]: {
                    backgroundColor: country.color
                  }
                }}
              />
            </Stack>
          </Stack>
        ))}
      </CardContent>
    </Card>
  )
}
