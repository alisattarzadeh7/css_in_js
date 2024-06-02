import './App.css'
import EmotionComponent from "./components/EmotionComponent.tsx";
import StyledComponent from "./components/StyledComponent.tsx";
import {useState} from "react";
import LinariaComponent from "./components/LinariaComponent.tsx";

function App() {
    const [count,setCount] = useState(0);

    const handleIncreaseCount = ()=>{
        setCount(count+1);
    }


    const handleReduceCount = ()=>{
        setCount(count-1)
    }

    return (
        <div className="main">
            <EmotionComponent onClick={handleIncreaseCount} color={`rgb(${count * 10},${count * 10},${count * 10})`}>
                count : {count}
            </EmotionComponent>
            <StyledComponent onClick={handleReduceCount} color={`rgb(${count * 10},${count * 10},${count * 10})`}>
                count : {count}
            </StyledComponent>
            <LinariaComponent onClick={handleReduceCount} color={`rgb(${count * 10},${count * 10},${count * 10})`}>
                count : {count}
            </LinariaComponent>
        </div>
    )
}

export default App
