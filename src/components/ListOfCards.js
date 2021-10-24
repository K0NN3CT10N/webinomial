import * as React from 'react';
import MyCard from './MyCard';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import List from '@mui/material/List';

const ListOfCards = () => {
    <List>
        <MyCard/>
        <MyCard/>
        <MyCard/>
    </List>
}

export default ListOfCards