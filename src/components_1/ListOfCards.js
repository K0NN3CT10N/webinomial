import * as React from 'react';

import MyCard from '../components_2/MyCard';

import List from '@mui/material/List';
import {ThemeProvider, createTheme} from '@mui/material';
import {Box} from '@mui/system';

const theme = createTheme({});

const ListOfCards = () => (
    <ThemeProvider theme={theme}>
        <Box
            sx={{
            ml: 10,
            }}
        >
            <List>
                <MyCard
                    name = "Purdue University" 
                    stat = "Ranked 4th in Engineering" 
                    desc = "'Purdue Engineering has so much to offer! There are so many...'"
                    image = './purdue_arch.jpg'
                />
                <br/>
                <MyCard
                    name = "University of Michigan" 
                    stat = "Ranked 4th in Business" 
                    desc = "'UMich's business programs go really nicely with other...'"
                    image = 'C:/Documents/Technology/Programming/webinomial/src/assets/michigan.jpg'/>
                <br/>
                <MyCard
                    name = "Princeton University" 
                    stat = "Ranked 1st in Math" 
                    desc = "'Princeton's campus atmosphere is amazing, and taking classes...'"
                    image = 'C:/Documents/Technology/Programming/webinomial/src/assets/princeton.jpg'/>
            </List>
        </Box>
    </ThemeProvider>
)

export default ListOfCards;