import {css} from "@linaria/core";
import {PropsWithChildren} from "react";


const a = css`
  --color-primary: #6200ee;
  --color-accent: #03dac4;
    
`;

// const b = css`
//   --color-primary: #03a9f4;
//   --color-accent: #e91e63;
// `;


const LinariaThemeProvider:React.FC<PropsWithChildren> = ({children})=>{
    return <div className={a}>{children}</div>
}

export default LinariaThemeProvider