import { useState } from "react";
import { useWeather } from "../hooks/useWeather"
import { Alert } from "./Alert";

export function Form () {

    const [ alert, setAlert ]       = useState('');

    const { search, dataSearch, consultWeather } = useWeather();
    const { city, country }         = search; 

    const handleSubmit = e => {
        e.preventDefault();

        if ( Object.values( search ).includes('') ) {
            setAlert('Todos los campos son obligatorios');
            return;
        }

        setAlert('');
        consultWeather( search );
    }

    return (
        <div className="container">

            { alert && <Alert message={ alert } /> }

            <form onSubmit={ handleSubmit }>
                <div className="field">
                    <input  type="text" 
                            id="city"
                            name="city"
                            placeholder="Ciudad"
                            value={ city }
                            onChange={ dataSearch }/>
                </div>

                <div className="field">
                    <select id="country"
                            name="country"
                            value={ country }
                            onChange={ dataSearch }>
                                <option value=''> Selecciona un País </option>
                                <option value='US'> Estados Unidos </option>
                                <option value='MX'> México </option>
                                <option value='AR'> Argentina </option>
                                <option value='CO'> Colombia </option>
                                <option value='CR'> Costa Rica </option>
                                <option value='ES'> España </option>
                                <option value='US'> Estados Unidos </option>
                                <option value='PE'> Perú </option>


                    </select>
                </div>

                <button type="submit"> Consultar Clima </button>

            </form>
        </div>
    )
}