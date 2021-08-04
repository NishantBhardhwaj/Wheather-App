import {useEffect, useState} from 'react';

import { Box, TextField ,Button,makeStyles} from '@material-ui/core';
import {getData} from '../service/api';
import Information from './Information';


const useStyles = makeStyles({
    component:{
        padding:15
    },
    input:{
        marginRight:25
    }
})

const Form =()=>{
    const classes = useStyles();
    const [city, setCity] = useState(''); 
    const [click,handleClick] = useState(false);
    const [data, getWeatherData ] = useState();
    useEffect(()=>{
     const getWeather = async () => {
       city && await getData(city).then(response => {
            
             getWeatherData(response.data);
         })
        }
        getWeather();
        handleClick(false);
    },[click]);


    const handleCityChange = (value) =>{
        setCity(value);
    }


    return(
        <>
          <Box className={classes.component}> 
               <TextField id="filled-secondary"  label="Search City" variant="filled"   color="secondary" 
                   onChange={(e)=>handleCityChange(e.target.value)}
                   inputProps={{className: classes.input}}
                   className={classes.input}
               />
                <Button variant="contained" color="secondary" 
                onClick={()=> handleClick(true)}
                >Get Weather</Button>
         </Box>
         <Information data={data}/>
        </>
    )
}
export default Form;