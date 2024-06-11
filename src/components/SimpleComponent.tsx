import {PropsWithChildren, useEffect, useState} from "react";


type ButtonComponentProps = PropsWithChildren<{
    onClick: () => void
    draggable?: boolean
}>

const EmotionComponent: React.FC<ButtonComponentProps> = ({children, draggable, ...props}) => {

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

    return <button
        style={{
            position: 'relative',
            top: position.y,
            left: position.x
        }}
        {...props}
    >{children}</button>
}

export default EmotionComponent
