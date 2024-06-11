import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {lazy, Suspense} from "react";
import EmotionThemeProvider from "./components/EmotionThemeProvider.tsx";
import LinariaThemeProvider from "./components/LinariaThemeProvider.tsx";
import createCache from "@emotion/cache";
import {CacheProvider} from "@emotion/react";
import Layout from "./Pages/Layout.tsx";

const Emotion = lazy(() => import('./Pages/Emotion'));
const Styled = lazy(() => import('./Pages/Styled'));
const Linaria = lazy(() => import('./Pages/Linaria'));
const Simple = lazy(() => import('./Pages/Simple'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path:'emotion',
                element:<Emotion/>
            },
            {
                path:'styled',
                element:<Styled/>
            },
            {
                path:'linaria',
                element:<Linaria/>
            },
            {
                path:'simple',
                element:<Simple/>
            },
        ]
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
