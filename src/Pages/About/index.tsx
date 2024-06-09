import {Link} from "react-router-dom";
import styled from '@emotion/styled'
import {styled as LinariaStyled} from '@linaria/react'
// import useEmotionTheme from "../../hooks/useEmotionTheme.ts";
import {PropsWithTheme} from "../../@types";


const EmotionText = styled.div<PropsWithTheme>`
    color: ${(props) => props.theme.colors.primary}
`

const LinariaText = LinariaStyled.div`
    color: var(--color-accent);
`


const About = () => {

    // const theme = useEmotionTheme()


    return <div>
        <EmotionText>
            EmotionProvider Effected text
        </EmotionText>
        <LinariaText>
            LinariaProvider Effected text
        </LinariaText>

        <Link to="/">home</Link>
    </div>
}

export default About