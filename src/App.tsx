import './App.css'
import EmotionComponent from "./components/EmotionComponent.tsx";
import StyledComponent from "./components/StyledComponent.tsx";
import { useState} from "react";
import LinariaComponent from "./components/LinariaComponent.tsx";

function App() {
    const [count,setCount] = useState(0);
    const [EmotionCmpDraggable, setEmotionCmpDraggable] = useState(false);
    const [SCCmpDraggable, setSCCmpDraggable] = useState(false);
    const [LinariaCmpDraggable, setLinariaCmpDraggable] = useState(false);
    const handleClickEm = ()=>{
        setEmotionCmpDraggable(!EmotionCmpDraggable)
        setCount(count+1);
    }


    const handleClickSC = ()=>{
        setSCCmpDraggable(!SCCmpDraggable)
        setCount(count-1)
    }

    const handleClickLinaria = ()=>{
        setLinariaCmpDraggable(!LinariaCmpDraggable)
        setCount(count - 2)

    }


    return (
        <div className="main">
            <EmotionComponent draggable={EmotionCmpDraggable} onClick={handleClickEm} color={`rgb(${count * 10},${count * 10},${count * 10})`}>
                count : {count}
            </EmotionComponent>
            <StyledComponent draggable={SCCmpDraggable} onClick={handleClickSC} color={`rgb(${count * 10},${count * 10},${count * 10})`}>
                count : {count}
            </StyledComponent>
            <LinariaComponent draggable={LinariaCmpDraggable} onClick={handleClickLinaria} color={`rgb(${count * 10},${count * 10},${count * 10})`}>
                count : {count}
            </LinariaComponent>
        </div>
    )
}

export default App
