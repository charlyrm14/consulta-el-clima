import { FiFrown } from "react-icons/fi";

export function NotResult ( { message } ) {
    
    return (
        <div className="container weather">
            <h3> { message } </h3>
            <p>
                <FiFrown/>
            </p>
        </div>
    )
}