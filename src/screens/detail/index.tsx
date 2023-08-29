import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export const BeerDetail = () => {
  const params = useParams();
  const { beerId } = params;

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <div>IMAGE</div>
        </Grid>
        <Grid item xs={6} md={6}>
          <div>NAME</div>
        </Grid>
        <Grid item xs={6} md={6}>
          <div>TAGLINE</div>
        </Grid>
        <Grid item xs={6} md={6}>
          <div>DESCRIPTION</div>
        </Grid>
        <Grid item xs={6} md={6}>
          <div>INGREDIENTS</div>
        </Grid>
      </Grid>
    </Container>
  );
};
