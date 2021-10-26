import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/styles';

const MyCard = () => {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>

        <CardMedia
          component="img"
          height="140"
          // image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Button color={theme.palette.primary.main}>Secondary</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MyCard;