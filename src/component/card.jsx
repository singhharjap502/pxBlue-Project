import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { 
  MuiThemeProvider, 
  createMuiTheme 
} from '@material-ui/core/styles';
import * as PXBThemes from '@pxblue/themes/react';
import CardHeader from "@material-ui/core/CardHeader"
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloudCircleIcon from "@material-ui/icons/CloudCircle";
import BellIcon from "@material-ui/icons/NotificationsActive"
import EventIcon from "@material-ui/icons/Error"
import GrainIcon from "@material-ui/icons/Grain"
import Link from "@material-ui/core/Link"
import WavesIcon from '@material-ui/icons/Waves';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';

const Cards = (props)=>{
return(
    <div className="cards">
    <MuiThemeProvider theme={createMuiTheme(PXBThemes.blueDark)}>
    {props.data.map(
      (destination,index)=>{
        return <Card key={index} className="card">
    <CardHeader title={destination.title} subheader={destination.subtitle} action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        } className="cardHeader" />
    <CardContent className="card_content">
      <Grid className="icon_container">
      <Grid className="left_icon_container">
        <Grid className="left_icon" id={"bell "+index}>
        <BellIcon ></BellIcon>
        <Typography >  {destination.alarmCount || 0} Alarm</Typography>
        </Grid>
        <Grid className="left_icon" id={"event "+index}>
        <EventIcon ></EventIcon>
        <Typography >  {destination.eventCount || 0} Events</Typography>
        </Grid>
        <Grid className="left_icon" >
          <CloudCircleIcon></CloudCircleIcon>
          <Typography>   {destination.commStatus || 0}</Typography>
        </Grid>
      </Grid>
      <Grid className="rigth_icon_container">
      <div>
        {destination.values.temperature && <Grid >
          <i className="pxb-temp"></i>
          <Typography>{destination.values.temperature}˚F</Typography>
          <Typography className ="keyword">Temperature</Typography>
        </Grid> || destination.values.temperature === null && <div className ="keyword">Temperature NA</div>}

        {destination.values.volume && <Grid>
          <LocalDrinkIcon></LocalDrinkIcon>
          <Typography>{destination.values.volume}KSCF</Typography>
          <Typography className ="keyword">Volume</Typography>
        </Grid> || destination.values.volume === null && <div className ="keyword">Volume NA</div>}
      </div>
      <div>
        {destination.values.humidity && <Grid>
          <GrainIcon></GrainIcon>
          <Typography>{destination.values.humidity}˚F</Typography>
          <Typography className ="keyword">Humidity</Typography>
        </Grid> || destination.values.humidity === null && <div className ="keyword">Humidity NA</div>}
        {destination.values.flow && <Grid>
          <WavesIcon></WavesIcon>
          <Typography>{destination.values.flow}KSCF</Typography>
          <Typography className ="keyword">Flow</Typography>
        </Grid> || destination.values.flow === null && <div className ="keyword">Flow NA</div>}
      </div>

      </Grid>
      </Grid>
      <div className="bottom_link">

      <Typography >
        <Link component="button" onClick={()=>{
          alert("No location given")
        }}>
        View Loaction
        </Link>
      </Typography>
      </div>
    </CardContent>
    </Card>
      }
    )}
      </MuiThemeProvider>
  </div>
)
}
export default Cards;