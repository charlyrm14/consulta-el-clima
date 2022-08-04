import { useContext } from "react";
import WeatherContext from "../context/WeatherProvider";

export function useWeather () {
    return useContext( WeatherContext );
}
