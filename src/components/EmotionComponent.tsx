import {css} from '@emotion/react'
import {PropsWithChildren} from "react";


type EmotionComponentProps = PropsWithChildren<{
    color:string
    onClick:()=>void
}>

const EmotionComponent: React.FC<EmotionComponentProps> = ({children,color, ...props}) => {
    return <button
        css={css`
            color: ${color}
        `}
        {...props}
    >{children}</button>
}

export default EmotionComponent
