import {Link, Outlet} from "react-router-dom";


const Layout = () => {
    return (<div>
        <div style={{display:'flex',gap:10}}>
            <Link to="/emotion">Emotion</Link>
            <Link to="/styled">Styled-component</Link>
            <Link to="/linaria">Linaria</Link>
            <Link to="/simple">Simple</Link>
        </div>
        <Outlet/>
    </div>)
}

export default Layout