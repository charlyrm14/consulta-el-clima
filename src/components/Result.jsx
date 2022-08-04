import { useWeather } from "../hooks/useWeather"
import { WiDayCloudy } from "react-icons/wi";

export function Result () {

    const { result } = useWeather();
    const { name, main: { temp, temp_min, temp_max } } = result;

    // Grados Kelvin
    const kelvin = 273.15;

    return (
        <div className="container weather">
            <h3> El clima de { name } es: </h3>

            <div>
                <p className="temp-current">
                    { parseInt( temp - kelvin ) } <span> °C </span>
                </p>

            </div>

            

            <div className="temp-min-max">
                <div>
                    <p className="icon-weather"> <WiDayCloudy/> </p>
                    <p className="temp-result">
                        Mínima: { parseInt( temp_min - kelvin ) } <span> °C  </span>
                    </p>
                </div>
                
                <div>
                    <p className="icon-weather"> <WiDayCloudy/> </p>
                    <p className="temp-result">
                        Máxima: { parseInt( temp_max - kelvin ) } <span> °C  </span>
                    </p>
                </div>
                
            </div>

        </div>
    )
}