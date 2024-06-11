import {Profiler, useState} from "react";
import StyledComponent from "../../components/StyledComponent.tsx";
import measureRender from "../../utils/helpers/measureRender.ts";
import Chart from "react-apexcharts";



const reportLog: Array<{
    phase: string
    actualDuration: number
    baseDuration: number
    startTime: number
    commitTime: number
}> = []



const StyledPage = () => {

    const [draggable, setDraggable] = useState(false);


    const handleClick = () => {
        setDraggable(!draggable)
    }

    const handleMeasure: React.ProfilerOnRenderCallback = (...args) => {
        reportLog.push({
            phase: args[1],
            actualDuration: args[2],
            baseDuration: args[3],
            startTime: args[4],
            commitTime: args[5],
        })
        measureRender(...args)
    }



    return (<>

        <Profiler id="StyledComponent" onRender={handleMeasure}>

            <StyledComponent draggable={draggable} onClick={handleClick}>
                {draggable ? 'stop' : 'start'} dragging
            </StyledComponent>
        </Profiler>


        <h1>Actual rendering</h1>

        {
            reportLog.length && <Chart options={{
                chart: {
                    type: 'area'
                }
            }} series={[{
                name: 'series-1',
                data: reportLog?.map(log => log.actualDuration)
            }]} width={700} height={450}/>}
        </>


    )
}

export default StyledPage