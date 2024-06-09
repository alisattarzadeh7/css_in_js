import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {lazy, Suspense} from "react";
import EmotionThemeProvider from "./components/EmotionThemeProvider.tsx";
import LinariaThemeProvider from "./components/LinariaThemeProvider.tsx";
import createCache from "@emotion/cache";
import {CacheProvider} from "@emotion/react";

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/about",
        element: <About/>,
    },
]);


const myCache = createCache({
    key: 'my-prefix-key',
    stylisPlugins: [
        /* your plugins here */
    ]
})

function App() {


    return (
        <div className="main">
            <CacheProvider value={myCache}>
                <LinariaThemeProvider>
                    <EmotionThemeProvider>
                        <Suspense fallback={<div>loading ...</div>}>
                            <RouterProvider router={router}/>
                        </Suspense>
                    </EmotionThemeProvider>
                </LinariaThemeProvider>
            </CacheProvider>
        </div>
    )
}

export default App
