import React, {useRef} from "react"
const useDebounce = (func, milliseconds) => {
    const time = milliseconds || 400
    let timer = useRef();

    return event => {
        console.log(timer.current)
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(func, time, event);
        console.log(timer);
    }
}


export default useDebounce;