import { useEffect, useState } from "react"
import "./style.css"

const timeObject = {
    red: 5000,
    yellow: 10000,
    green: 7000
}


const TrafficLight = () => {

    const [active, setActive] = useState("red")

    const [time, setTime] = useState(timeObject);


    useEffect(() => {
        if (active === "red") {
            setTimeout(() => {
                setActive("green")
            }, [time.red])
        }
        else if (active === 'yellow') {
            setTimeout(() => {
                setActive("red")
            }, [time.yellow])
        } else {
            setTimeout(() => {
                setActive("yellow")
            }, [time.green])
        }
    }, [active])

    return (
        <div className="content">
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
            <div className="details">
                <p>{active.toUpperCase()} LIGHT</p>
            </div>
        </div>
     
    )
}


export default TrafficLight