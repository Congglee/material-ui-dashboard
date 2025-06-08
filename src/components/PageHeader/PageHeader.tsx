import Stack from '@mui/material/Stack'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
import { Link as MuiLink } from '@mui/material'

interface PageHeaderProps {
  heading: string
  breadcrumbs?: { name: string; href: string }[]
}

export default function PageHeader({ heading, breadcrumbs = [] }: PageHeaderProps) {
  return (
    <Stack m={0}>
      <Breadcrumbs aria-label='breadcrumb'>
        {breadcrumbs.map((breadcrumb) => (
          <MuiLink color='text.secondary' underline='hover' fontWeight={500} fontSize={16} href={breadcrumb.href}>
            {breadcrumb.name}
          </MuiLink>
        ))}
      </Breadcrumbs>
      <Typography variant='h4' fontSize='1.5rem' fontWeight={600} lineHeight={1.5}>
        {heading}
      </Typography>
    </Stack>
  )
}
