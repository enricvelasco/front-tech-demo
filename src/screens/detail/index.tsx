import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useDetail } from './resources/useDetail';

export const BeerDetail = () => {
  const {
    beer
  } = useDetail();

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <div>{beer?.imageUrl}</div>
        </Grid>
        <Grid item xs={6} md={6}>
          <div>{beer?.name}</div>
        </Grid>
        <Grid item xs={6} md={6}>
          <div>{beer?.tagline}</div>
        </Grid>
        <Grid item xs={6} md={6}>
          <div>{beer?.description}</div>
        </Grid>
        <Grid item xs={6} md={6}>
          <div>INGREDIENTS</div>
        </Grid>
      </Grid>
    </Container>
  );
};
