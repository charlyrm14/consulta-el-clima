import { Form } from "./Form";
import { Result } from "./Result";
import { useWeather } from "../hooks/useWeather"
import { Spinner } from "./Spinner";
import { NotResult } from "./NotResult";

export function AppWeather () {

    const { result, spinner, notResult } = useWeather();


    return (
        <>
            <main className="two-columns">
                <Form/>

                { 
                    spinner ? <Spinner/> :
                    result?.name ? <Result/> :
                    notResult ? <NotResult message={ notResult }/>
                    : null 
                }

            </main>
        </>
    )
}