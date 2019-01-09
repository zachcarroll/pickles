import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Card, CardTitle, CardText, CardMedia} from 'material-ui/Card';
import logo from '../images/pickle.png';

const HomePage = () =>
  <Grid fluid>
    <Row style={{marginTop: "20px"}} center="xs">
      <Col xs={12}>
        <Card style={{padding: "15px"}}>
          <CardMedia>
            <img style={{maxHeight: "250px", maxWidth: "100%", width: "auto", minWidth: "initial"}} src={logo} alt="1 Dollar Pickles Logo Mascot" />
          </CardMedia>
          <CardTitle title="Coming Soon!" subtitle="The first place online dedicated to the exchange of pickle art." />
          <CardText>
            Thanks for signing up! We are working hard to bring 1DP to life!
          </CardText>
        </Card>
      </Col>
    </Row>
  </Grid>

export default HomePage;