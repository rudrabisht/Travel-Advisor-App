import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
  
export const getPlacesData = async (sw, ne) => {
    try{
        const { data: { data }} = await axios.get(URL, {
          params: {
            bl_latitude: '11.847676',
            bl_longitude: '109.095887',
            tr_latitude: '12.838442',
            tr_longitude: '109.149359',
          },
          headers: {
            'X-RapidAPI-Key': '9bc33d6dfamshed886af5357af8ep1d7ae1jsn11292ded8bdf',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
          
        return data;
    } catch (error) {
        console.log(error);
    }

}