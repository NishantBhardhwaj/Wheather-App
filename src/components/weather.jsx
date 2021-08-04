import {Box, makeStyles} from '@material-ui/core';
import logo from '../images/bg.jpg';
//import mount from '../images/bsn.jpg';
import Form from './Form';
const useStyles = makeStyles({
    component:{
         height:'100vh',
         display:'flex',
         alignItems:'center',
         width:'65%',
         margin:'0 auto'
    },
    leftContainer:{
        backgroundImage: `url(${logo})`,
        height:'85%',
        width:'35%',
        backgroundSize:'cover',
        borderRadius:'19px 0 0 19px'
    },
    rightContainer: {
        //backgroundImage: `url(${mount})`,
        background:'linear-gradient(to left, cyan,  orange)',
        height:'85%',
        width:'65%',
        backgroundSize:'cover'
        
    }
})

const Weather=()=>{
    const classes = useStyles();
    return(
        <Box className={classes.component}>
        <Box  className={classes.leftContainer}></Box>
        <Box  className={classes.rightContainer}>
            <Form />
        </Box>
        </Box>
    )
}
export default Weather;