import { useState } from "react"

export const Count = () => {
    const [count, setCount] = useState(0);
    /* localStorage.setItem("count", count)
    if(localStorage.setItem("count")){
        setCount(localStorage.setItem("count"))
    } */

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = ( ) => {
        setCount(count > 0 ? count - 1 : 0)
    }

    return (
        <>
            <h2>Contador - Hook useState</h2>
            <div>
                <button onClick={decrement}>
                    -
                </button>
                <p>{count}</p>
                <button onClick={increment}>
                    +
                </button>
            </div>
        </>
    )
}