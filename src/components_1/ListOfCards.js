import * as React from 'react';

import MyCard from '../components_2/MyCard';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import List from '@mui/material/List';

const ListOfCards = () => (
    <List>
        <MyCard/>
        <MyCard/>
        <MyCard/>
        {/* <MyCard 
            name = {'University of Illinois Urbana-Champaign'} 
            stat = {'Ranked 5th in Computer Science'}
            desc = {'UIUC has lots of opportunities that I took advantage of to explore my interests.\n - Taken from Quora'}
        /> */}
    </List>
)

export default ListOfCards;