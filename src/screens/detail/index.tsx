import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useParams } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const BeerDetail = () => {
  const params = useParams();
  const { beerId } = params;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 32, backgroundColor: '#F5F5F5' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title="NAME"
          subheader="TAGLINE"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            DESCRIPTION
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Ingredients:</Typography>
            <List dense={true}>
              <ListItem>
                <ListItemText
                  primary="Single-line item"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Single-line item"
                />
              </ListItem>
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
