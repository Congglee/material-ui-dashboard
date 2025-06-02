import { blueGrey } from '@mui/material/colors'
import { extendTheme } from '@mui/material/styles'

export const DRAWER_WIDTH = 320

const theme = extendTheme({
  colorSchemeSelector: 'class',
  typography: {
    fontFamily: 'Source Sans 3, sans-serif'
  },
  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: '#0b0e14'
        },
        secondary: {
          main: blueGrey[900]
        }
      }
    },
    dark: {
      palette: {
        text: {
          primary: '#ffffff'
        },
        secondary: {
          main: blueGrey[50]
        }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            backgroundColor: theme.palette.mode === 'dark' ? '' : '#ffffff',
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
            boxShadow: 'none'
          })
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px',
          '&:hover': { borderWidth: '0.5px' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { fontSize: '0.875rem' }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': { fontSize: '0.875rem' }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '1px !important' },
          '&.Mui-focused fieldset': { borderWidth: '1px !important' }
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              '&:hover': {
                backgroundColor: theme.palette.primary.main
              }
            }
          })
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 30,
          color: 'inherit'
        }
      }
    }
  }
})

export default theme
