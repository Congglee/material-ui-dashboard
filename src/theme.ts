import { purple, deepPurple } from '@mui/material/colors'
import { extendTheme } from '@mui/material/styles'

export const DRAWER_WIDTH = 320

const theme = extendTheme({
  colorSchemeSelector: 'class',
  typography: {
    fontFamily: 'Inter, sans-serif'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: purple[600], // #8e24aa
          light: purple[400], // #ab47bc
          dark: purple[800], // #6a1b9a
          contrastText: '#ffffff'
        },
        secondary: {
          main: deepPurple[500], // #673ab7
          light: deepPurple[300], // #9575cd
          dark: deepPurple[700], // #512da8
          contrastText: '#ffffff'
        },
        text: {
          primary: '#1a1a1a'
        },
        background: {
          default: '#faf8ff', // Very light purple tint
          paper: '#ffffff'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: purple[400], // #ab47bc - lighter for dark mode
          light: purple[300], // #ba68c8
          dark: purple[600], // #8e24aa
          contrastText: '#ffffff'
        },
        secondary: {
          main: deepPurple[300], // #9575cd - lighter for dark mode
          light: deepPurple[200], // #b39ddb
          dark: deepPurple[500], // #673ab7
          contrastText: '#ffffff'
        },
        text: {
          primary: '#ffffff'
        },
        background: {
          default: '#0f0a1a', // Very dark purple
          paper: '#1a0f2e' // Dark purple paper
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
            backgroundColor: purple[200],
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: purple[300]
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            backgroundColor: theme.palette.mode === 'dark' ? '#1a0f2e !important' : '#faf8ff !important',
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#1a1a1a',
            boxShadow: 'none',
            borderBottom: `1px solid ${theme.palette.mode === 'dark' ? purple[800] : purple[100]}`
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
                backgroundColor: theme.palette.primary.dark
              }
            },
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? `${purple[900]}40` // 40 is alpha in hex
                  : `${purple[50]}80`
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
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: 'none',
          backgroundColor: theme.palette.mode === 'dark' ? '#1a0f2e' : '#ffffff',
          border: `1px solid ${theme.palette.mode === 'dark' ? purple[800] : purple[100]}`
        })
      }
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mode === 'dark' ? '#1a0f2e' : '#ffffff',
          border: `1px solid ${theme.palette.mode === 'dark' ? purple[800] : purple[100]}`,
          '&:hover': {
            borderColor: theme.palette.mode === 'dark' ? purple[600] : purple[300]
          }
        })
      }
    }
  }
})

export default theme
