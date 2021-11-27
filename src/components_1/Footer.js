import * as React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Box} from '@mui/system';

const theme = createTheme({
    palette: {
      primary: {
        main: '#71d5e4',
      },
      secondary: {
        main: '#d1e2c4',
      },
      background: {
          paper: '#71d5e4'
      },
    },
  });

const Footer = () => (
    <ThemeProvider theme={theme}>
        <Box
          sx={{height: 10,
          width: 1500,
          bgcolor: theme.palette.primary.main,
          }}
        >
          <Paper>
              <Typography variant="h6">
                  <center>webinomial.com</center>
              </Typography>
          </Paper>
        </Box>
    </ThemeProvider>
)

export default Footer;