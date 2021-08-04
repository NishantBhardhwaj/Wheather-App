
import { Box ,Typography, makeStyles} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FlareIcon from '@material-ui/icons/Flare';
import OpacityIcon from '@material-ui/icons/Opacity';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloudIcon from '@material-ui/icons/Cloud';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import WavesIcon from '@material-ui/icons/Waves';

const useStyles = makeStyles({
    component: {
        margin: 49
    },
    row: {
        padding: 10,
        fontSize: 19,
        letterSpacing: 2
    },
    value: {
        color: '#fff'
    },
    icon: {
        marginRight: 15
    }
})

const Information = ({ data }) => {
    const classes = useStyles();
    return(
        data ?
        <Box className={classes.component}>
            <Typography className={classes.row}><LocationOnIcon className={classes.icon}/>Location:<Box className={classes.value} component="span">  {data.name}, {data.sys&&data.sys.country}</Box></Typography>
            <Typography className={classes.row}><FlareIcon className={classes.icon}/> Temprature:<Box className={classes.value} component="span">  {data.main.temp} °C</Box></Typography>
            <Typography className={classes.row}><OpacityIcon className={classes.icon}/> Humidity: <Box className={classes.value} component="span"> {data.main.humidity}%</Box> </Typography>
            <Typography className={classes.row}><SaveAltIcon className={classes.icon}/>Pressure: <Box className={classes.value} component="span"> {data.main.pressure} ppm</Box> </Typography>
            <Typography className={classes.row}><WbSunnyIcon className={classes.icon}/>Sun Rise: <Box className={classes.value} component="span"> {new Date(data.sys.sunrise * 1000).toLocaleTimeString()} Hrs</Box></Typography>
            <Typography className={classes.row}><Brightness6Icon className={classes.icon}/>Sun Set: <Box className={classes.value} component="span"> {new Date(data.sys.sunset * 1000).toLocaleTimeString()} Hrs</Box></Typography>
            <Typography className={classes.row}><DehazeIcon className={classes.icon}/>Condition:<Box className={classes.value} component="span"> {data.weather[0].description}</Box></Typography>
            <Typography className={classes.row}><CloudIcon className={classes.icon}/>Clouds: <Box className={classes.value} component="span"> {data.clouds.all}%</Box></Typography>
            <Typography className={classes.row}><WavesIcon className={classes.icon}/>Wind Speed: <Box className={classes.value} component="span">{data.wind.speed} meter/sec</Box></Typography>


        </Box> : ''
    )
}

export default Information;