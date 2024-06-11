



const measureRender: React.ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log(`    ${id}
                        phase ${phase}
                        actualDuration  ${actualDuration} 
                        baseDuration  ${baseDuration}
                        startTime ${startTime}
                        commitTime  ${commitTime}`)
}


export default measureRender