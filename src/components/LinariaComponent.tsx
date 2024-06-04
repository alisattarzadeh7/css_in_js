import {styled} from "@linaria/react";
import {PropsWithChildren, useEffect, useState} from "react";


type LinariaComponentProps = PropsWithChildren<{
    color: string
    onClick: () => void
    draggable: boolean
}>
const Button = styled.button<{ position: { y: number, x: number } }>`
    color: ${(props) => props.color as string};
    position: relative;
    top: ${(props) => `${props.position.y}px`};
    left: ${(props) => `${props.position.x}px`};
`

const LinariaComponent: React.FC<LinariaComponentProps> = ({children, draggable, ...props}) => {
    const [position, setPosition] = useState<{ x: number, y: number }>({x: 0, y: 0})


    useEffect(() => {

        const handleUpdatePosition = (e: MouseEvent) => {
            setPosition({
                x: e.pageX - 250,
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

export default LinariaComponent