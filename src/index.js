import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter, createHashRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./error-page";
import Timeline from "./views/timeline";
import Blog from "./views/blog";
import Category from "./views/category";
import Tag from "./views/tag";
import Toolbox from "./views/toolbox";
import Index from "./tools/index";
import B from "./tools/b";
import {Canvas} from "@react-three/fiber";
import Entozh from "./tools/entozh";
import {ChinaPopulationMap} from "./tools/chart/Map";
import BonusChart from "./tools/chart/BonusChart";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/home",
        element: <App />,
    },
    {
        path: "/category",
        element: <Category />,
    },
    {
        path: "category/:category",
        element: <Category />,
    },
    {
        path: "tag",
        element: <Tag />,
    },
    {
        path:  "tag/:tag",
        element: <Tag />,
    },
    {
        path: "timeline",
        element: <Timeline />,
    },
    {
        path: "blogs/:title",
        element: <Blog />,
    },
    {
        path: "/Toolbox",
        element: <Toolbox />,
        children: [
            {index:true,element: <Index />},
            {
                path: "b",
                element:
                    <Canvas>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <B position={[-1.2, 0, 0]} />
                        <B position={[1.2, 0, 0]} />
                    </Canvas>,
            },
            {
                path: "enToZh",
                element: <Entozh />,
            },
            {
                path: "chart",
                element: <ChinaPopulationMap />
            },
            {
                path: "bonusChart",
                element: <BonusChart />
            }
        ]
    },
    {
        path: "Contact/Github",
        loader: () => {window.location.replace("https://github.com/PdeKingsley");return "https://github.com/PdeKingsley";},
    },
],)

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
