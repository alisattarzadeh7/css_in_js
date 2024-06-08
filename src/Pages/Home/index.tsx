import EmotionComponent from "../../components/EmotionComponent.tsx";
import StyledComponent from "../../components/StyledComponent.tsx";
import LinariaComponent from "../../components/LinariaComponent.tsx";
import {Profiler, useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Home = () => {

    const [count, setCount] = useState(0);
    const [EmotionCmpDraggable, setEmotionCmpDraggable] = useState(false);
    const [SCCmpDraggable, setSCCmpDraggable] = useState(false);
    const [LinariaCmpDraggable, setLinariaCmpDraggable] = useState(false);
    const handleClickEm = () => {
        setEmotionCmpDraggable(!EmotionCmpDraggable)
        setCount(count + 1);
    }


    const handleClickSC = () => {
        setSCCmpDraggable(!SCCmpDraggable)
        setCount(count - 1)
    }

    const handleClickLinaria = () => {
        setLinariaCmpDraggable(!LinariaCmpDraggable)
        setCount(count - 2)

    }


    useEffect(()=>{
        setInterval(()=>{
            setCount(count + 1)
        },3000)
    },[])


    const handleMeasureEmotionRender: React.ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
        console.log(`    ${id}
                        phase ${phase}
                        actualDuration ${actualDuration}
                        baseDuration ${baseDuration}
                        startTime ${startTime}
                        commitTime ${commitTime}`)
    }

    const handleMeasureStyledRender: React.ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
        console.log(`    ${id}
                        phase ${phase}
                        actualDuration ${actualDuration}
                        baseDuration ${baseDuration}
                        startTime ${startTime}
                        commitTime ${commitTime}`)
    }


    const handleMeasureLinariaRender: React.ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
        console.log(`    ${id}
                        phase ${phase}
                        actualDuration  ${actualDuration} 
                        baseDuration  ${baseDuration}
                        startTime ${startTime}
                        commitTime  ${commitTime}`)
    }


    return <>
        <Profiler id="EmotionComponent" onRender={handleMeasureEmotionRender}>
            <EmotionComponent draggable={false} onClick={handleClickEm}
                              color={`rgb(${count * 10},${count * 10},${count * 10})`}>
                Emotion count up : {count}
            </EmotionComponent>
        </Profiler>
        <Profiler id="StyledComponent" onRender={handleMeasureStyledRender}>

            <StyledComponent draggable={false} onClick={handleClickSC}
                             color={`rgb(${count * 10},${count * 10},${count * 10})`}>
                Styled count down : {count}
            </StyledComponent>
        </Profiler>
        <Profiler id="LinariaComponent" onRender={handleMeasureLinariaRender}>

            <LinariaComponent draggable={false} onClick={handleClickLinaria}
                              color={`rgb(${count * 10},${count * 10},${count * 10})`}>
               Linaria count down : {count}
            </LinariaComponent>
        </Profiler>
        <Profiler id="SimpleComponent" onRender={handleMeasureLinariaRender}>

            <button  onClick={handleClickEm}
                              style={{color:`rgb(${count * 10},${count * 10},${count * 10})`}}>
                Simple count up : {count}
            </button>
        </Profiler>
        <br/>

        <Link to="/about">about</Link>
    </>
}


export default Home