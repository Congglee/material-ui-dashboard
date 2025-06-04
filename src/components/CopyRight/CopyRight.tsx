import type { SxProps } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Link as MuiLink } from '@mui/material'

interface CopyRightProps {
  styles?: SxProps
}

export default function CopyRight({ styles }: CopyRightProps) {
  return (
    <Typography
      variant='body2'
      align='center'
      sx={[{ color: 'text.secondary' }, ...(Array.isArray(styles) ? styles : [styles])]}
    >
      {'Copyright © '}
      <MuiLink color='inherit' href='https://mui.com/'>
        Your Co
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
