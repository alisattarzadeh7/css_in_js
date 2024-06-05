import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {lazy, Suspense} from "react";
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


function App() {


    return (
        <div className="main">
            <Suspense fallback={<div>loading ...</div>}>
            <RouterProvider router={router}/>
            </Suspense>
        </div>
    )
}

export default App
