import styled from "styled-components";
import {PropsWithChildren} from "react";


type StyledComponentProps = PropsWithChildren<{
    color:string
    onClick:()=>void
}>
const Button = styled.button`
    color: ${(props) => props.color}
`

const StyledComponent: React.FC<StyledComponentProps> = ({children, ...props}) => {
    return <Button {...props}>{
        children
    }</Button>
}

export default StyledComponent