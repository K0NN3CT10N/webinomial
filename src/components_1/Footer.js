import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '../Theme.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#11cb5f',
      },
      secondary: {
        main: '#11cb5f',
      },
      background: {
          paper: '#11cb5f'
      },
    },
  });

const Footer = () => (
    // <>
    //     <div id="footer">webinomial.com</div>
    // </>
    <ThemeProvider theme={theme}>
        <Paper>
            <Typography variant="h1" >
                <center>webinomial.com</center>
            </Typography>
        </Paper>
    </ThemeProvider>
)

export default Footer;