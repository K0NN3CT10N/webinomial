import * as React from 'react';

import {Box} from '@mui/system';
import {ThemeProvider, createTheme} from '@mui/material';

import purdue from '../assets/purdue.jpg';

const theme = createTheme({});

const MainImage = () => (
    <>
        <ThemeProvider theme={theme}>
            <Box
                component="img"
                sx={{
                height: 350,
                width: 1500,
                }}
                src={purdue}
            >
            </Box>
        </ThemeProvider>
    </>
) 

export default MainImage;