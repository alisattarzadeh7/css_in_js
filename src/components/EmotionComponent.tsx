import {css} from '@emotion/react'
import {PropsWithChildren, useEffect, useState} from "react";


// https://github.com/emotion-js/emotion/issues/1921
//https://github.com/emotion-js/emotion/issues/488
type EmotionComponentProps = PropsWithChildren<{
    color: string
    onClick: () => void
    draggable?: boolean
}>

const EmotionComponent: React.FC<EmotionComponentProps> = ({children, draggable, color, ...props}) => {

    const [position, setPosition] = useState<{ x: number, y: number }>({x: 0, y: 0})

    useEffect(() => {

        const handleUpdatePosition = (e:MouseEvent) => {
            setPosition({
                x: e.pageX - 10,
                y: e.pageY - 10
            })
        }
        if(draggable)
        window.addEventListener('mousemove',handleUpdatePosition )

        return ()=>{
            window.removeEventListener('mousemove',handleUpdatePosition )

        }
    }, [draggable])

    return <button
        css={css`
            color: ${color};
            position: relative;
            top:${position.y}px;
            left:${position.x}px;
        `}
        {...props}
    >{children}</button>
}

export default EmotionComponent
