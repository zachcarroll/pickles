import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Card, CardTitle, CardText, CardMedia} from 'material-ui/Card';
import logo from '../images/pickle.png';

const imgStyle = {
  maxHeight: "250px", 
  maxWidth: "100%", 
  width: "auto", 
  minWidth: "initial"
};

const stepNumberStyle = {
  textAlign: "center", 
  lineHeight: "100px", 
  borderRadius: "100%", 
  backgroundColor: "#ABC000", 
  height: "100px", 
  width: "100px", 
  margin: "0 auto",
  fontSize: "40px",
  color: "#fff000"
};

const LandingPage = () =>
  <Grid fluid>
    <Row style={{marginTop: "20px"}} center="xs">
      <Col xs={12}>
        <Card style={{padding: "15px"}}>
          <CardMedia>
            <img style={imgStyle} src={logo} alt="1 Dollar Pickles Logo Mascot" />
          </CardMedia>
          <CardTitle 
            title="Welcome!" 
            subtitle="The first place online dedicated to the exchange of pickle art." />
        </Card>
      </Col>
    </Row>

    <Row style={{marginTop: "20px"}} center="xs">
      <Col xs={12}>
        <Card style={{padding: "15px"}}>
          <CardText style={{padding: "0"}}>
            <Row middle="xs">
              <Col md={3} xs={12}>
                <div style={{fontSize: "22px", marginBottom: "15px", color: "rgba(48, 40, 39, 0.87)"}}>Create Pickle Art</div>
              </Col>
              <Col md={3} xs={12}>
                <div style={{fontSize: "22px", marginBottom: "15px", color: "rgba(48, 40, 39, 0.87)"}}>Upload</div>
              </Col>
              <Col md={3} xs={12}>
                <div style={{fontSize: "22px", marginBottom: "15px", color: "rgba(48, 40, 39, 0.87)"}}>Receive Pickle Art</div>
              </Col>
              <Col md={3} xs={12}>
                <div style={{fontSize: "22px", marginBottom: "15px", color: "rgba(48, 40, 39, 0.87)"}}>Purchase the Original</div>
              </Col>
            </Row>
            <Row middle="xs">
              <Col md={3} xs={12}>
                <div style={{fontSize: "14px", color: "rgba(48, 40, 39, 0.54)"}}>Create your own original pickle art. Get creative - sculpture, paints, digital, and more are all accepted!</div>
              </Col>
              <Col md={3} xs={12}>
                <div style={{fontSize: "14px", color: "rgba(48, 40, 39, 0.54)"}}>Upload a picture of your art (along with 1 dollar) to 1DP.</div>
              </Col>
              <Col md={3} xs={12}>
                <div style={{fontSize: "14px", color: "rgba(48, 40, 39, 0.54)"}}>Receive a high-quality image of someone else's original pickle art! This image is yours to keep.</div>
              </Col>
              <Col md={3} xs={12}>
                <div style={{fontSize: "14px", color: "rgba(48, 40, 39, 0.54)"}}>Decide if you'd like to purchase the original art or get it printed on a mug, sticker, shirt, or poster!</div>
              </Col>
            </Row>
          </CardText>
        </Card>
      </Col>
    </Row>

  </Grid>

export default LandingPage;
