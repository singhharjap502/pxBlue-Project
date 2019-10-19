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
  <div>
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
        <Grid className="left_icon">
        <BellIcon></BellIcon>
        <Typography>{destination.alarmCount || 0}</Typography>
        </Grid>
        <Grid className="left_icon">
        <EventIcon></EventIcon>
        <Typography>{destination.eventCount || 0}</Typography>
        </Grid>
        <Grid className="left_icon">
          <CloudCircleIcon></CloudCircleIcon>
          <Typography>{destination.commStatus || 0}</Typography>
        </Grid>
      </Grid>
      <Grid className="rigth_icon_container">
      <div>
        {destination.values.temperature && <Grid>
          <i className="pxb-temp"></i>
          <Typography>{destination.values.temperature}˚F</Typography>
          <Typography>Temperature</Typography>
        </Grid> || destination.values.temperature === null && <div>Temperature NA</div>}

        {destination.values.volume && <Grid>
          <LocalDrinkIcon></LocalDrinkIcon>
          <Typography>{destination.values.volume}KSCF</Typography>
          <Typography>Volume</Typography>
        </Grid> || destination.values.volume === null && <div>Volume NA</div>}
      </div>
      <div>
        {destination.values.humidity && <Grid>
          <GrainIcon></GrainIcon>
          <Typography>{destination.values.humidity}˚F</Typography>
          <Typography>Humidity</Typography>
        </Grid> || destination.values.humidity === null && <div>Humidity NA</div>}
        {destination.values.flow && <Grid>
          <WavesIcon></WavesIcon>
          <Typography>{destination.values.flow}KSCF</Typography>
          <Typography>Flow</Typography>
        </Grid> || destination.values.flow === null && <div>Flow NA</div>}
      </div>

      </Grid>
      </Grid>
      <Typography className="link">
        <Link component="button" onClick={()=>{
          alert("No location given")
        }}>
        View Loaction
        </Link>
      </Typography>
    </CardContent>
    </Card>
      }
    )}
      </MuiThemeProvider>
    </div>
  </div>
)
}

export default Cards;