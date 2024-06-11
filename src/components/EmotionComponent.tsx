import styled from '@emotion/styled'
import {PropsWithChildren, useEffect, useState} from "react";
import {PropsWithTheme} from "../@types";


// https://github.com/emotion-js/emotion/issues/1921
// https://github.com/emotion-js/emotion/issues/488
type EmotionComponentProps = PropsWithChildren<{
    onClick: () => void
    draggable?: boolean
}>

const Button = styled.div<PropsWithTheme<{ position: { x: number, y: number } }>>`
    color: ${(props) => props.theme.colors.primary};
    position: relative;
    top: ${(props) => props.position.y}px;
    left: ${(props) => props.position.x}px;
`


const EmotionComponent: React.FC<EmotionComponentProps> = ({children, draggable, ...props}) => {

    const [position, setPosition] = useState<{ x: number, y: number }>({x: 0, y: 0})

    useEffect(() => {

        const handleUpdatePosition = (e: MouseEvent) => {
            setPosition({
                x: e.pageX - 30,
                y: e.pageY - 30
            })
        }
        if (draggable)
            window.addEventListener('mousemove', handleUpdatePosition)

        return () => {
            window.removeEventListener('mousemove', handleUpdatePosition)

        }
    }, [draggable])

    return <Button
        position={position}
        {...props}
    >{children}</Button>
}

export default EmotionComponent
