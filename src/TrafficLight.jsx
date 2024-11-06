import { useEffect, useState } from "react"
import "./style.css"


const TrafficLight = () => {

    const [active, setActive] = useState("red")
   

    useEffect(() => {
        if (active === "red") {
            setTimeout(() => {
                setActive("green")
            }, [5000])
        }
        else if (active === 'yellow') {
            setTimeout(() => {
                setActive("red")
            }, [10000])
        } else {
            setTimeout(() => {
                setActive("yellow")
            }, [7000])
        }
    }, [active])

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