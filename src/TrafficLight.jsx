import { useEffect, useState } from "react"
import "./style.css"


const TrafficLight = () => {

    const [active, setActive] = useState("red")

    useEffect(() => {
        if (active === "red") {
            setTimeout(() => {
                setActive("yellow")
            }, [5000])
        } 
    }, [])

    return (
        <div className="container">
            <div
                style={{ opacity: active === 'red' ? 1 : 0.5 }}
                className="color red">R</div>
            <div
                style={{ opacity: active === 'green' ? 1 : 0.5 }}
                className="color green">G</div>
            <div
                style={{ opacity: active === 'yellow' ? 1 : 0.5 }}
                className="color yellow">Y</div>
        </div>
    )
}


export default TrafficLight