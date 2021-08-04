import axios from 'axios';



const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY ='f67946406fe760c81f0f6067573fae13';
export const getData = async(city) => {
    return await axios.get(`${URL}?q=${city},india&appid=${API_KEY}&units=metric`)
}