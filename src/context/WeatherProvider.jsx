import { useState, createContext } from "react";
import axios from 'axios';


const WeatherContext = createContext();

const WeatherProvider = ( { children } ) => {


    const [ search, setSearch ] = useState({
        city:       '',
        country:    ''
    });

    const [ result, setResult ]         = useState({});
    const [ spinner, setSpinner ]       = useState(false);
    const [ notResult ,setNotResult ]   = useState('');


    const dataSearch = e => {
        setSearch({
            ...search,
            [ e.target.name ] : e.target.value
        })
    }

    const consultWeather = async ( dataUser ) => {

        setSpinner(true);
        setNotResult(false);

        try {
            
            const { city, country } = dataUser;

            const appID  = import.meta.env.VITE_API_KEY;
            const urlAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${ appID }`;

            const { data }      = await axios( urlAPI );
            const { lat, lon }  = data[0];

            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`;

            const { data: weather } = await axios( urlWeather );
            
            setResult( weather );
            setSpinner(false);

        } catch ( error ) {
            setNotResult('No hay resultados para tu busqueda');
        } finally {
            setSpinner(false);
        }
    }

    return (
        <WeatherContext.Provider
            value={{
                search,
                dataSearch,
                consultWeather,
                result,
                spinner,
                notResult
            }}>

            { children }
        </WeatherContext.Provider>
    )

}

export {
    WeatherProvider
}

export default WeatherContext;