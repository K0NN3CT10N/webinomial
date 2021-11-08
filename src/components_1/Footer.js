import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '../Theme.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#00b6bc',
      },
      secondary: {
        main: '#71d5e4',
      },
      background: {
          paper: '#00b6bc'
      },
    },
  });

const Footer = () => (
    <ThemeProvider theme={theme}>
        <Paper>
            <Typography variant="h6">
                <center>webinomial.com</center>
            </Typography>
        </Paper>
    </ThemeProvider>
)

export default Footer;