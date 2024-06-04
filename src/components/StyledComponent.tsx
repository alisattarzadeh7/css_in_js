import styled from "styled-components";
import {PropsWithChildren, useEffect, useState} from "react";


type StyledComponentProps = PropsWithChildren<{
    color: string
    onClick: () => void
    draggable?: boolean
}>
const Button = styled.button<{ position: { y: number, x: number } }>`
    color: ${(props) => props.color};
    position: relative;
    top: ${(props) => `${props.position.y}px`};
    left: ${(props) => `${props.position.x}px`};
`

const StyledComponent: React.FC<StyledComponentProps> = ({children, draggable, ...props}) => {
    const [position, setPosition] = useState<{ x: number, y: number }>({x: 0, y: 0})

    useEffect(() => {

        const handleUpdatePosition = (e: MouseEvent) => {
            setPosition({
                x: e.pageX - 150,
                y: e.pageY - 10
            })
        }
        if (draggable)
            window.addEventListener('mousemove', handleUpdatePosition)

        return () => {
            window.removeEventListener('mousemove', handleUpdatePosition)

        }
    }, [draggable])

    return <Button {...props} position={position}>{
        children
    }</Button>
}

export default StyledComponent