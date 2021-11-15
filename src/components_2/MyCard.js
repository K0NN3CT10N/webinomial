import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const MyCard = ({name, stat, desc, image}) => {
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardActionArea>

        <CardMedia
          component="img"
          height="100"
          // image="/static/images/cards/contemplative-reptile.jpg"
          alt={name}
          src={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {stat}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MyCard;