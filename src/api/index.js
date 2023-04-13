import axios from "axios";
  
export const getPlacesData = async (type, sw, ne) => {
    try{
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat, 
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '74a58a59femsh3f6e24c29dfcb00p12ae0cjsn655c7a07bb67',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
          
        return data;
    } catch (error) {
        console.log(error);
    }
}