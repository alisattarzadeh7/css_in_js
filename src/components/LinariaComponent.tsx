import { styled } from "@linaria/react";
import {PropsWithChildren} from "react";


type LinariaComponentProps = PropsWithChildren<{
    color:string
    onClick:()=>void
}>
const Button = styled.button`
    color: ${(props) => props.color as string}
`

const LinariaComponent: React.FC<LinariaComponentProps> = ({children, ...props}) => {
    return <Button {...props}>{
        children
    }</Button>
}

export default LinariaComponent